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

    return hub.create(hubData)
              .then(hubDataSynced =>
                  res.status(201)
                     .send(helpers.controllerHelpers.afterCreateSuccess(hubDataSynced, contextName, res.locals.cacheHandler))
              ).catch(error =>
                  res.status(401)
                     .send(helpers.responseHelpers.addFailure(contextName, error))
              );
};

const getAllHubs = (req, res) => {
    return hub.findAll()
              .then(allHubs =>
                  res.status(200)
                     .send(helpers.controllerHelpers.afterFetchSuccess(allHubs, contextName, res.locals.cacheHandler))
              ).catch(error =>
                  res.status(400)
                     .send(helpers.responseHelpers.fetchFailure(contextName, error))
              );
};

const updateHub = (req, res) => {
    const hubIdToUpdate = req.params.hubId;

    req.body.updated_timestamp = new Date().toISOString();

    return hub.findByPk(hubIdToUpdate)
              .then(targetHub => {
                  targetHub.update(req.body, { fields: Object.keys(req.body) })
                           .then(hubDataUpdated =>
                               res.status(200)
                                  .send(helpers.controllerHelpers.afterUpdateSuccess(hubDataUpdated, contextName, res.locals.cacheHandler))
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

    return hub.findByPk(hubIdToDelete)
              .then(targetHub => {
                  targetHub.destroy()
                           .then(() =>
                               res.status(200)
                                  .send(helpers.controllerHelpers.afterUpdateSuccess(targetHub, contextName, res.locals.cacheHandler))
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
