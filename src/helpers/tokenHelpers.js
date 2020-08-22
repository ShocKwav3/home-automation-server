import jwt from 'jsonwebtoken';
import _ from 'lodash';

import models from 'src/models';
import utils from 'src/helpers/utils';
import { tokenExpiryHour } from 'src/config/otherConstants';


const { token } = models;

const getTokenFromDb = (owner_id, owner_type, tokenToGet) => {
    const query = {
        where: {
            ...(owner_id && {owner_id}),
            ...(owner_type && {owner_type}),
            ...(tokenToGet && {token: tokenToGet}),
        },
    };

    return models.token.findOne(query)
                .then(tokenData => tokenData)
                .catch(error => error);
}

const updateDbToken = ({token: tokenValue, expiry_timestamp}, owner_id, owner_type) => {
    const tokenRowToUpdate = {
        token: tokenValue,
        expiry_timestamp,
        owner_id,
        owner_type,
        updated_timestamp: new Date().toISOString(),
    };

    const query = {
        fields: Object.keys(tokenRowToUpdate),
        where: {
            owner_id,
            owner_type,
        },
    };

    return token.update(tokenRowToUpdate, query)
                .then(synchedToken => synchedToken)
                .catch(error => error);
}

const addTokenToDb = ({token: tokenValue, expiry_timestamp}, owner_id, owner_type) => {
    const tokenRowToAdd = {
        token: tokenValue,
        expiry_timestamp,
        owner_id,
        owner_type,
        added_timestamp: new Date().toISOString(),
    };

    return token.create(tokenRowToAdd)
                .then(synchedToken => synchedToken)
                .catch(error => error);
}

const generateToken = (contextObject, secret, expiryHour = tokenExpiryHour) => ({
    expiry_timestamp: utils.addHoursToDate(Date.now(), expiryHour),
    token: jwt.sign(contextObject, secret, {expiresIn: `${expiryHour}h`}),
})

const isTokenExpired = (tokenExpiryTimestamp) => utils.getHoursDifference(tokenExpiryTimestamp, new Date().toISOString()) >= 0;

const handleToken = async (owner_id, owner_type, contextObject, secret) => {
    let tokenDetails = await getTokenFromDb(owner_id, owner_type) || {};

    if (_.isEmpty(tokenDetails)) {
        tokenDetails.toBeInserted = true;
    } else if(isTokenExpired(tokenDetails.expiry_timestamp)) {
        tokenDetails.toBeUpdated = true;
    }

    if (tokenDetails.toBeUpdated || tokenDetails.toBeInserted) {
        const newToken = generateToken(contextObject, secret);
        tokenDetails.token = newToken.token;
        tokenDetails.expiry_timestamp = newToken.expiry_timestamp;

        if(tokenDetails.toBeUpdated) {
            await updateDbToken(tokenDetails, owner_id, owner_type);
        } else if (tokenDetails.toBeInserted) {
            await addTokenToDb(tokenDetails, owner_id, owner_type);
        }
    }

    return tokenDetails;
}

const refreshToken = async (oldToken) => {
    let tokenDetails = await getTokenFromDb(null, null, oldToken);
    tokenDetails.expiry_timestamp = utils.addHoursToDate(Date.now(), tokenExpiryHour);

    await updateDbToken(tokenDetails, tokenDetails.owner_id, tokenDetails.owner_type);

    return tokenDetails;
}


export default {
    isTokenExpired,
    handleToken,
    refreshToken,
}