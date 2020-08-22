import _ from 'lodash';

import models from 'src/models';
import responseHelpers from 'src/helpers/responseHelpers';
import tokenHelpers from 'src/helpers/tokenHelpers';
import  { printLog, logStylers } from 'src/helpers/logHelpers';


const verifyToken = (req, res, next) => {
    console.log("CHECK", req.url, req.method)
    if(req.url.includes('/users') && req.method === 'POST') {
        next();
    } else {
        const { token } = models;
        const tokenToCheck = req.headers.authorization?.split(' ')[1];

        if(tokenToCheck) {
            const contextObject = {
                token: tokenToCheck,
            };

            const query = {
                where: contextObject,
            };

            token.findOne(query)
                 .then((tokenData) => {
                      if (tokenData && (!tokenHelpers.isTokenExpired(tokenData.expiry_timestamp) || (tokenHelpers.isTokenExpired(tokenData.expiry_timestamp) && req.url.includes('/refreshToken') && req.method === 'GET'))) {
                         log(logStylers.authSuccess('Verified! Token: '), logStylers.values(tokenToCheck), logStylers.values(tokenData.expiry_timestamp), logStylers.values(new Date().toISOString()));

                         next();
                     } else {
                         throw new Error('Token Expired or was not supplied');
                     }
                 })
                 .catch(err => {
                    printLog(logStylers.authFailure(`Verification failed, unauthorized/non-existing token: ${logStylers.values(tokenToCheck)}`));

                    res.status(403)
                       .send(responseHelpers.tokenVerificationFailure(err, 'unauthorized/non-existing token'));
                 });
        } else {
            printLog(logStylers.authFailure(`Verification failed, no token supplied: ${logStylers.values(tokenToCheck)}`))

            res.status(403)
               .send(responseHelpers.tokenVerificationFailure({message: 'No token supplied'}, 'Verification failed, no token supplied'));
        }
    }
};


export default {
    verifyToken,
};
