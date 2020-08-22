import bcrypt from 'bcrypt';
import _ from 'lodash';

import models from 'src/models';
import helpers from 'src/helpers';
import tokenHelpers from 'src/helpers/tokenHelpers';
import { controllerConstants } from 'src/config/constants';
import { passwordSaltingTimes } from 'src/config/otherConstants';
import { userSecret } from 'src/config/secrets';
import  { printLog, logStylers } from 'src/helpers/logHelpers';


const { user } = models;
const contextName = controllerConstants.user.CONTEXTNAME;


const addUser = async (req, res) => {
    const {
        name,
        email,
        password,
        added_timestamp,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, passwordSaltingTimes);

    const userData = {
        name,
        email,
        password: hashedPassword,
        added_timestamp,
    };

    return user.create(userData)
               .then(userDataSynced =>
                   res.status(201)
                      .send(helpers.responseHelpers.addSuccess(contextName, userDataSynced))
               ).catch(error =>
                   res.status(401)
                      .send(helpers.responseHelpers.addFailure(contextName, error))
               );
}

const loginUser = (req, res) => {
    const {
        user_email,
        password,
    } = req.body;

    const contextObject = {
        email: user_email,
    };

    const query = {
        where: contextObject,
    };

    return user.findOne(query)
               .then(async (userDetails) => {
                   if (userDetails) {
                        const isPasswordCorrect = await bcrypt.compare(password, userDetails.password);

                        if (!isPasswordCorrect) {
                            printLog(logStylers.genericFailure('Incorrect password! User email: '), logStylers.values(user_email));

                            return res.status(400)
                                      .send(helpers.responseHelpers.fetchFailure(contextName, {message: 'Incorrect Password'}));
                        }

                        const userTokenDetails = await tokenHelpers.handleToken(userDetails.id, contextName, contextObject, userSecret);
                        const userData = {
                            id: userDetails.id,
                            name: userDetails.name,
                            email: userDetails.email,
                            added_timestamp: userDetails.added_timestamp,
                            updated_timestamp: userDetails.updated_timestamp,
                            token: userTokenDetails.token,
                            expiry_timestamp: userTokenDetails.expiry_timestamp,
                        };

                        return res.status(200)
                                  .send(helpers.responseHelpers.fetchSuccess(contextName, userData))
                   } else {
                       printLog(logStylers.genericFailure('User does not exist! User email: '), logStylers.values(user_email));

                       throw new Error('No USER exists for provided E-mail');
                   }
               }).catch(error => {
                   printLog(logStylers.genericError('Error while finding user for login. User email: '), logStylers.values(user_email));

                   res.status(400)
                      .send(helpers.responseHelpers.fetchFailure(contextName, error))
               });
}

const updateUser = (req, res) => {
    const userIdToUpdate = req.params.userId;

    req.body.updated_timestamp = new Date().toISOString();

    return user.findByPk(userIdToUpdate)
               .then(targetUser =>
                   targetUser.update(req.body, { fields: Object.keys(req.body) })
                             .then(userDataUpdated =>
                                 res.status(200)
                                    .send(helpers.responseHelpers.updateSuccess(contextName, userDataUpdated))
                   ).catch(error =>
                       res.status(400)
                          .send(helpers.responseHelpers.updateFailure(contextName, error))
                   )
               ).catch(error =>
                   res.status(400)
                      .send(helpers.responseHelpers.updateFailure(contextName, error))
               );
}

const deleteUser = (req, res) => {
    const userIdToDelete = req.params.userId

    const contextObject = {
        id: userIdToDelete,
    };

    const query = {
        where: contextObject,
    };

    return user.destroy(query)
               .then((numberOfRowsDeleted) =>
                   res.status(200)
                      .send(helpers.responseHelpers.updateSuccess(contextName, null))
               ).catch(error =>
                   res.status(400)
                      .send(helpers.responseHelpers.deleteFailure(contextName, error))
               );
}

const getAllUsers = (req, res) => {
    return user.findAll()
               .then(users =>
                   res.status(200)
                      .send(helpers.responseHelpers.fetchSuccess(contextName, users))
               )
               .catch(error =>
                   res.status(400)
                      .send(helpers.responseHelpers.fetchFailure(contextName, error))
               )
}

const getRefreshToken = async (req, res) => {
    const suppliedToken = req.headers.authorization?.split(' ')[1];

    const newToken = await tokenHelpers.refreshToken(suppliedToken);

    res.status(200)
       .send(helpers.responseHelpers.updateSuccess('Token', newToken, 'refreshed'));
}

export default {
  addUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getRefreshToken,
}
