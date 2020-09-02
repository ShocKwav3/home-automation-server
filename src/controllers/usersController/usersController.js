import bcrypt from 'bcrypt';
import _ from 'lodash';

import models from 'src/models';
import helpers from 'src/helpers';
import tokenHelpers from 'src/helpers/tokenHelpers';
import { controllerConstants } from 'src/config/constants';
import { passwordSaltingTimes } from 'src/config/otherConstants';
import { userSecret } from 'src/config/secrets';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { user } = models;
const contextName = controllerConstants.user.CONTEXTNAME;
const userControllerLog = controllerLog(contextName);

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
               .then(userDataSynced => {
                   userControllerLog(logStylers.genericSuccess('User created successfully. Values:\n'), logStylers.values(JSON.stringify(userDataSynced)));

                   return res.status(201)
                             .send(helpers.responseHelpers.addSuccess(contextName, userDataSynced));
               }).catch(error => {
                   userControllerLog(logStylers.genericError('Error creating user. Message: '), logStylers.values(error.message), '\n', error.stack);

                   return res.status(401)
                             .send(helpers.responseHelpers.addFailure(contextName, error.message));
               });
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
                            userControllerLog(logStylers.genericFailure('Incorrect password! User email: '), logStylers.values(user_email));

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

                        userControllerLog(logStylers.genericSuccess('User successfully logged in. User data: '), logStylers.values(JSON.stringify(userData)));

                        return res.status(200)
                                  .send(helpers.responseHelpers.fetchSuccess(contextName, userData));
                   } else {
                       userControllerLog(logStylers.genericFailure('User does not exist! User email: '), logStylers.values(user_email));

                       throw new Error('No USER exists for provided E-mail');
                   }
               }).catch(error => {
                   userControllerLog(logStylers.genericError('Error while finding user for login. User email: '), logStylers.values(user_email), logStylers.values(error.message), error.stack);

                   return res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error.message));
               });
}

const updateUser = (req, res) => {
    const userIdToUpdate = req.params.userId;
    const query = {
        fields: Object.keys(req.body),
        returning: true,
        where: {
            id: userIdToUpdate,
        },
    };

    req.body.updated_timestamp = new Date().toISOString();

    return targetUser.update(req.body, query)
                     .then(userDataUpdated => {
                         userControllerLog(`${logStylers.genericSuccess('User successfully updated! ')}, Old: ${logStylers.values(JSON.stringify(req.body))} New: ${logStylers.values(JSON.stringify(userDataUpdated[1][0]))}`);

                         return res.status(200)
                                   .send(helpers.responseHelpers.updateSuccess(contextName, userDataUpdated[1][0]));
                     }).catch(error => {
                         userControllerLog(logStylers.genericError('Error updating user: '), logStylers.values(JSON.stringify(userIdToUpdate)), logStylers.values(error.message), error.stack);

                         return res.status(400)
                                   .send(helpers.responseHelpers.updateFailure(contextName, error.message));
                     })
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
               .then(() => {
                   userControllerLog(logStylers.genericSuccess('User successfully deleted! ID: '), logStylers.values(userIdToDelete));

                   return res.status(200)
                             .send(helpers.responseHelpers.updateSuccess(contextName, null));
               }).catch(error => {
                   userControllerLog(logStylers.genericError(`Error deleting user. ID: ${logStylers.values(userIdToDelete)}`), logStylers.values(error.message), error.stack);

                   return res.status(400)
                             .send(helpers.responseHelpers.deleteFailure(contextName, error.message));
               });
}

const getAllUsers = (req, res) => {
    return user.findAll()
               .then(allUsers => {
                   userControllerLog(logStylers.genericSuccess('Users fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allUsers)));

                   return res.status(200)
                             .send(helpers.responseHelpers.fetchSuccess(contextName, allUsers));
               })
               .catch(error => {
                   userControllerLog(logStylers.genericError('Error fetching users: '), logStylers.values(error.message), '\n', error.stack);

                   return res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error.message));
               })
}

const getRefreshToken = async (req, res) => {
    const suppliedToken = req.headers.authorization?.split(' ')[1];

    const newToken = await tokenHelpers.refreshToken(suppliedToken);

    userControllerLog(logStylers.genericSuccess('Token refresh successful. New token: '), logStylers.values(newToken));

    return res.status(200)
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
