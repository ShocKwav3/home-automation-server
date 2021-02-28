import jwt from 'jsonwebtoken';
import _ from 'lodash';

import models from 'src/models';
import utils from 'src/helpers/utils';
import constants from 'src/config/constants';
import { tokenLog, logStylers } from 'src/helpers/logHelpers';


const { token } = models;
const { tokenExpiryHour } = constants;

const getTokenFromDb = (ownerId, ownerType, tokenToGet) => {
    const query = {
        where: {
            ...(ownerId && { owner_id: ownerId }),
            ...(ownerType && { owner_type: ownerType }),
            ...(tokenToGet && { token: tokenToGet }),
        },
    };

    return models.token.findOne(query)
        .then((tokenData) => tokenData)
        .catch((error) => error);
};

const updateDbToken = ({ token: tokenValue, expiry_timestamp }, ownerId, ownerType) => {
    const tokenRowToUpdate = {
        token: tokenValue,
        expiry_timestamp,
        owner_id: ownerId,
        owner_type: ownerType,
        updated_timestamp: new Date().toISOString(),
    };

    const query = {
        fields: Object.keys(tokenRowToUpdate),
        returning: true,
        where: {
            owner_id: ownerId,
            owner_type: ownerType,
        },
    };

    return token.update(tokenRowToUpdate, query)
        .then(([numberOfAffectedRows, synchedTokenData]) => {
            tokenLog(
                `${logStylers.genericSuccess(`Token updated successfully for ${logStylers.values(ownerType)} id: ${logStylers.values(ownerId)}`)}`,
                `Affected rows: ${numberOfAffectedRows}`
            );

            // NOTE: Since this is allowed to update only a single token through the route, the updated token data will always contain a single (changed) row thus we are using synchedTokenData[0];
            return synchedTokenData[0];
        })
        .catch((error) => error);
};

/* const addTokenToDb = ({token: tokenValue, expiry_timestamp}, owner_id, owner_type) => {
    const tokenRowToAdd = {
        token: tokenValue,
        expiry_timestamp,
        owner_id,
        owner_type,
        added_timestamp: new Date().toISOString(),
    };

    return token.create(tokenRowToAdd)
        .then((synchedToken) => synchedToken)
        .catch((error) => error);
}; */

const generateToken = (contextObject, secret, expiryHour = tokenExpiryHour) => ({
    expiry_timestamp: utils.addHoursToDate(Date.now(), expiryHour),
    token: jwt.sign(contextObject, secret, { expiresIn: `${expiryHour}h` }),
});

const isTokenExpired = (tokenExpiryTimestamp) => utils.getHoursDifference(tokenExpiryTimestamp, new Date().toISOString()) >= 0;

const handleTokenForLogin = async (ownerId, ownerType, contextObject, secret) => {
    let tokenDetails = await getTokenFromDb(ownerId, ownerType) || {};
    const timeNow = utils.getTimeNow();

    if (_.isEmpty(tokenDetails)) {
        tokenDetails = {
            ...generateToken(contextObject, secret),
            owner_id: ownerId,
            owner_type: ownerType,
            added_timestamp: timeNow,
        };
    } else if (isTokenExpired(tokenDetails.expiry_timestamp)) {
        tokenDetails = {
            ...tokenDetails.toJSON(),
            updated_timestamp: new Date().toISOString(),
            expiry_timestamp: utils.addHoursToDate(Date.now(), tokenExpiryHour),
        };
    } else {
        return tokenDetails;
    }

    return token.upsert(tokenDetails, { fields: ['updated_timestamp', 'expiry_timestamp'] })
        .then((data) => ({
            token: tokenDetails.token,
            expiry_timestamp: tokenDetails.expiry_timestamp,
            ...(tokenDetails.updated_timestamp && { updated_timestamp: tokenDetails.updated_timestamp }),
            data,
        }))
        .catch((error) => error);
};

const refreshToken = async (oldToken) => {
    const tokenDetails = await getTokenFromDb(null, null, oldToken);
    tokenDetails.expiry_timestamp = utils.addHoursToDate(Date.now(), tokenExpiryHour);

    return updateDbToken(tokenDetails, tokenDetails.owner_id, tokenDetails.owner_type);
};


export default {
    isTokenExpired,
    handleTokenForLogin,
    refreshToken,
};
