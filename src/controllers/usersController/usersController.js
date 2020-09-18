import _ from 'lodash';

import models from 'src/models';
import helpers from 'src/helpers';
import tokenHelpers from 'src/helpers/tokenHelpers';
import { controllerConstants } from 'src/config/constants';
import { userSecret } from 'src/config/secrets';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { user } = models;
const contextName = controllerConstants.user.CONTEXTNAME;
const userControllerLog = controllerLog(contextName);

const addUser = (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        added_timestamp: req.body.added_timestamp,
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
                   if (!_.isEmpty(userDetails)) {
                        if (!userDetails.isPasswordCorrect(password)) {
                            userControllerLog(logStylers.genericFailure('Incorrect password! User email: '), logStylers.values(user_email));

                            return res.status(400)
                                      .send(helpers.responseHelpers.fetchFailure(contextName, {message: 'Incorrect Password'}));
                        }

                        const userTokenDetails = await tokenHelpers.handleTokenForLogin(userDetails.id, contextName, contextObject, userSecret);
                        const userData = formatUserData(userDetails, userTokenDetails);

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
    const requestedChanges = {
        ...req.body,
        updated_timestamp: new Date().toISOString(),
    }
    const query = {
        fields: Object.keys(requestedChanges),
        returning: true,
        where: {
            id: userIdToUpdate,
        },
    };

    return user.update(requestedChanges, query)
                 .then(userDataUpdateInformation => {
                     const [numberOfRowsAffected, updatedUserData] = userDataUpdateInformation;

                     //NOTE: Since this is allowed to update only a single user through the route, the updated user data will always contain a single changed row thus we are using updatedUserData[0];
                     userControllerLog(`${logStylers.genericSuccess('User successfully updated! ')}, Incoming: ${logStylers.values(JSON.stringify(req.body))} After change: ${logStylers.values(JSON.stringify(updatedUserData[0]))}`);

                     return res.status(200)
                               .send(helpers.responseHelpers.updateSuccess(contextName, updatedUserData[0]));
                 }).catch(error => {
                     userControllerLog(logStylers.genericError('Error updating user: '), logStylers.values(JSON.stringify(userIdToUpdate)), logStylers.values(error.message), error.stack);

                     return res.status(400)
                               .send(helpers.responseHelpers.updateFailure(contextName, error.message));
                 })
}

const deleteUser = (req, res) => {
    const userIdToDelete = req.params.userId
    const query = {
        where: {
            id: userIdToDelete,
        },
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
    try {
        const suppliedToken = req.headers.authorization?.split(' ')[1];
        const newToken = await tokenHelpers.refreshToken(suppliedToken);

        userControllerLog(logStylers.genericSuccess('Token refresh successful. New token: '), logStylers.values(newToken));

        return res.status(200)
                  .send(helpers.responseHelpers.updateSuccess('Token', newToken, 'refreshed'));
    } catch (error) {
        userControllerLog(logStylers.genericFailure('Token refresh failed. Error: '), error.message, error.stack);

        return res.status(200)
                  .send(helpers.responseHelpers.updateFailure('Token', 'Internal error', 'refresh'));
    }
}

const formatUserData = (userDetails, userTokenDetails) => {
    return {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        added_timestamp: userDetails.added_timestamp,
        updated_timestamp: userDetails.updated_timestamp,
        token: userTokenDetails.token,
        expiry_timestamp: userTokenDetails.expiry_timestamp,
    };
}

export default {
  addUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getRefreshToken,
}
