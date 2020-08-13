import _ from 'lodash';

import models from 'src/models';
import responseHelpers from 'src/helpers/responseHelpers';
import tokenHelpers from 'src/helpers/tokenHelpers';


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
                         console.log("Verified! Token: ", tokenToCheck, tokenData.expiry_timestamp, new Date().toISOString());

                         next();
                     } else {
                         throw new Error('Token Expired or was not supplied');
                     }
                 })
                 .catch(err => {
                    console.log("Verification failed, unauthorized/non-existing token: ", tokenToCheck);

                    res.status(403).send(responseHelpers.tokenVerificationFailure(err, 'unauthorized/non-existing token'));
                 });
        } else {
            console.log("Verification failed, no token supplied: ", tokenToCheck);

            res.status(403).send(responseHelpers.tokenVerificationFailure({message: 'No token supplied'}, 'Verification failed, no token supplied'));
        }
    }
};


export default {
    verifyToken,
};
