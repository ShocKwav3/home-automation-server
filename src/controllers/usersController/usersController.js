import models from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';

const { user } = models;
const contextName = controllerConstants.user.CONTEXTNAME;


const addUser = (req, res) => {
  const {
      name,
      email,
      password,
      added_timestamp,
  } = req.body;

  const userData = {
      name,
      email,
      password,
      added_timestamp,
  };

  return user.create(userData)
             .then(userDataSynced =>
                 res.status(201)
                    .send(helpers.controllerHelpers.afterCreateSuccess(userDataSynced, contextName))
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

  const loginCredentials = {
    email: user_email,
    password,
  };

  return user.findOne({where: loginCredentials})
             .then(userData =>
                 res.status(400)
                    .send(helpers.controllerHelpers.afterFetchSuccess(userData, contextName))
             ).catch(error =>
                 res.status(400)
                    .send(helpers.responseHelpers.fetchFailure(contextName, error))
             );
}

const updateUser = (req, res) => {
  const userIdToUpdate = req.params.userId;

  req.body.updated_timestamp = new Date().toISOString();

  return user.findByPk(userIdToUpdate)
             .then(targetUser =>
                 targetUser.update(req.body, { fields: Object.keys(req.body) })
                           .then(userDataUpdated =>
                               res.status(200)
                                  .send(helpers.controllerHelpers.afterUpdateSuccess(userDataUpdated, contextName))
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

  return user.findByPk(userIdToDelete)
             .then(targetUser =>
                 targetUser.destroy()
                           .then(() =>
                               res.status(200)
                                  .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName))
                 ).catch(error =>
                     res.status(400)
                        .send(helpers.responseHelpers.deleteFailure(contextName, error))
                 )
             ).catch(error =>
                 res.status(400)
                    .send(helpers.responseHelpers.deleteFailure(contextName, error))
             );
}

export default {
  addUser,
  loginUser,
  updateUser,
  deleteUser,
}
