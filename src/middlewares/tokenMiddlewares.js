import _ from 'lodash';

import models from 'src/models';
import responseHelpers from 'src/helpers/responseHelpers';
import tokenHelpers from 'src/helpers/tokenHelpers';
import { tokenLog, logStylers } from 'src/helpers/logHelpers';


const verifyToken = (req, res, next) => {
    if (req.url.includes('/users') && req.method === 'POST') {
        next();
    } else {
        const { token } = models;
        const tokenToCheck = req.headers.authorization?.split(' ')[1];

        if (tokenToCheck) {
            const contextObject = {
                token: tokenToCheck,
            };

            const query = {
                where: contextObject,
            };

            token.findOne(query)
                 .then((tokenData) => {
                      if (!_.isEmpty(tokenData) && (!tokenHelpers.isTokenExpired(tokenData.expiry_timestamp) || (tokenHelpers.isTokenExpired(tokenData.expiry_timestamp) && req.url.includes('/refreshToken') && req.method === 'GET'))) {
                         tokenLog(logStylers.authSuccess('Verified! Token: '), logStylers.values(tokenToCheck), '\n  expires: ', logStylers.values(tokenData.expiry_timestamp), '\n  now: ', logStylers.values(new Date().toISOString()));

                         next();
                     } else {
                         throw new Error('Token Expired/does not exists');
                     }
                 })
                 .catch(err => {
                    tokenLog(logStylers.authFailure(`Verification failed, unauthorized/non-existing token: ${logStylers.values(tokenToCheck)}`));

                    res.status(403)
                       .send(responseHelpers.tokenVerificationFailure({message: err.message}, 'unauthorized/non-existing token'));
                 });
        } else {
            tokenLog(logStylers.authFailure(`Verification failed, no token found! supplied: ${logStylers.values(tokenToCheck)}`))

            res.status(403)
               .send(responseHelpers.tokenVerificationFailure('No token supplied', 'Verification failed'));
        }
    }
};


export default {
    verifyToken,
};
