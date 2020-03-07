import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';

const { hub } = model;
const contextName = controllerConstants.hub.CONTEXTNAME;


const addHub = (req, res) => {
    const {
    name,
    user_id,
    added_timestamp,
    } = req.body;

    const hubData = {
    name,
    user_id,
    added_timestamp,
    };

    const cacheClient = req.app.get('cacheClient');
    const cacheKey = res.locals.cacheKey;

    return hub.create(hubData)
              .then(hubDataSynced =>
                  helpers.controllerHelpers.afterCreateSuccess(res, hubDataSynced, contextName, cacheClient, cacheKey)
              ).catch(error =>
              res.status(401)
                 .send(helpers.responseHelpers.addFailure(contextName, error))
              );
};

const getAllHubs = (req, res) => {
    const cacheClient = req.app.get('cacheClient');
    const cacheKey = res.locals.cacheKey;

    return hub.findAll()
              .then(allHubs =>
                  helpers.controllerHelpers.afterFetchSuccess(res, allHubs, contextName, cacheClient, cacheKey)
              ).catch(error =>
                  res.status(400)
                     .send(helpers.responseHelpers.fetchFailure(contextName, error))
              );
};

const updateHub = (req, res) => {
    const hubIdToUpdate = req.params.hubId;
    const cacheClient = req.app.get('cacheClient');
    const cacheKey = helpers.utils.constructString('remove', 'end', `/${hubIdToUpdate}`, res.locals.cacheKey);

    req.body.updated_timestamp = new Date().toISOString();

    return hub.findByPk(hubIdToUpdate)
              .then(targetHub => {
                  targetHub.update(req.body, { fields: Object.keys(req.body) })
                           .then(hubDataUpdated =>
                               helpers.controllerHelpers.afterUpdateSuccess(res, hubDataUpdated, contextName, cacheClient, cacheKey, 'update')
                           ).catch(error =>
                           res.status(400)
                               .send(helpers.responseHelpers.updateFailure(contextName, error))
                           )
              }).catch(error =>
                  res.status(400)
                     .send(helpers.responseHelpers.updateFailure(contextName, error))
                 );
};

const deleteHub = (req, res) => {
    const hubIdToDelete = req.params.hubId;
    const cacheClient = req.app.get('cacheClient');
    const cacheKey = helpers.utils.constructString('remove', 'end', `/${hubIdToDelete}`, res.locals.cacheKey);

    return hub.findByPk(hubIdToDelete)
              .then(targetHub => {
                  targetHub.destroy()
                              .then(() =>
                                  helpers.controllerHelpers.afterUpdateSuccess(res, targetHub, contextName, cacheClient, cacheKey, 'delete')
                              ).catch(error =>
                                  res.status(400)
                                     .send(helpers.responseHelpers.deleteFailure(contextName, error))
                              )
              }).catch(error =>
                  res.status(400)
                     .send(helpers.responseHelpers.deleteFailure(contextName, error))
                 );
}

export default {
  addHub,
  getAllHubs,
  updateHub,
  deleteHub,
};
