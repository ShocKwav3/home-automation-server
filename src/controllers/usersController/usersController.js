import models from 'projectRoot/src/models';
import helpers from 'projectRoot/src/helpers';
import { controllerConstants } from 'projectRoot/src/config/constants';

const { user } = models;
const contextName = controllerConstants.user.CONTEXTNAME


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
  }

  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey

  return user.create(userData)
             .then(userDataSynced =>
               helpers.controllerHelpers.afterCreateSuccess(res, userDataSynced, contextName, cacheClient, cacheKey)
             ).catch(error =>
               res.status(401)
                  .send(helpers.responseHelpers.addFailure(contextName, error))
             );
};

const loginUser = (req, res) => {
  const {
    user_email,
    password,
  } = req.body

  const loginCredentials = {
    email: user_email,
    password,
  }

  return user.findOne({where: loginCredentials})
               .then(userData =>
                  helpers.controllerHelpers.afterFetchSuccess(res, userData, contextName)
               ).catch(error =>
                 res.status(400)
                    .send(helpers.responseHelpers.fetchFailure(contextName, error))
               );
};

const updateUser = (req, res) => {
  const userIdToUpdate = req.params.userId
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = helpers.utils.constructString('remove', 'end', `/${userIdToUpdate}`, res.locals.cacheKey)

  req.body.updated_timestamp = new Date().toISOString()

  return user.findByPk(userIdToUpdate)
               .then(targetUser => {
                 targetUser.update(req.body, { fields: Object.keys(req.body) })
                 .then(userDataUpdated =>
                   helpers.controllerHelpers.afterUpdateSuccess(res, userDataUpdated, contextName, cacheClient, cacheKey, 'update')
                 ).catch(error =>
                   res.status(400)
                      .send(helpers.responseHelpers.updateFailure(contextName, error))
                 )
               })
               .catch(error =>
                 res.status(400)
                 .send(helpers.responseHelpers.updateFailure(contextName, error))
               );
};

const deleteUser = (req, res) => {
  const userIdToDelete = req.params.userId
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = helpers.utils.constructString('remove', 'end', `/${userIdToDelete}`, res.locals.cacheKey)

  return user.findByPk(userIdToDelete)
               .then(targetUser => {
                 targetUser.destroy()
                 .then(() =>
                   helpers.controllerHelpers.afterUpdateSuccess(res, null, contextName, cacheClient, cacheKey, 'delete')
                 ).catch(error =>
                   res.status(400)
                   .send(helpers.responseHelpers.deleteFailure(contextName, error))
                 )
               })
               .catch(error =>
                 res.status(400)
                    .send(helpers.responseHelpers.deleteFailure(contextName, error))
               );
}

export default {
  addUser,
  loginUser,
  updateUser,
  deleteUser,
};