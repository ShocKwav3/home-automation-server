import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { hub } = model;
const contextName = controllerConstants.hub.CONTEXTNAME;
const hubsControllerLog = controllerLog(contextName);

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
              .then(hubDataSynced => {
                  hubsControllerLog(logStylers.genericSuccess('Hub created successfully. Values:\n'), logStylers.values(JSON.stringify(hubDataSynced)));

                  return res.status(201)
                            .send(helpers.controllerHelpers.afterCreateSuccess(hubDataSynced, contextName, res.locals.cacheHandler));
              }).catch(error => {
                  hubsControllerLog(logStylers.genericError('Error creating hub. Message: '), logStylers.values(error.message), '\n', error.stack);

                  return res.status(401)
                            .send(helpers.responseHelpers.addFailure(contextName, error.message));
              });
}

const getAllHubs = (req, res) => {
    return hub.findAll()
              .then(allHubs => {
                  hubsControllerLog(logStylers.genericSuccess('Hubs fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allHubs)));

                  return res.status(200)
                            .send(helpers.controllerHelpers.afterFetchSuccess(allHubs, contextName, res.locals.cacheHandler));
              }).catch(error => {
                  hubsControllerLog(logStylers.genericError('Error fetching hubs: '), logStylers.values(error.message), '\n', error.stack);

                  return res.status(400)
                            .send(helpers.responseHelpers.fetchFailure(contextName, error.message));
              });
}

const updateHub = (req, res) => {
    const hubIdToUpdate = req.params.hubId;

    req.body.updated_timestamp = new Date().toISOString();

    return hub.findByPk(hubIdToUpdate)
              .then(targetHub => {
                  targetHub.update(req.body, { fields: Object.keys(req.body) })
                           .then(hubDataUpdated => {
                               hubsControllerLog(`${logStylers.genericSuccess('Hub successfully updated! ')}, Old: ${logStylers.values(JSON.stringify(targetHub))} New: ${logStylers.values(JSON.stringify(hubDataUpdated))}`);

                               return res.status(200)
                                         .send(helpers.controllerHelpers.afterUpdateSuccess(hubDataUpdated, contextName, res.locals.cacheHandler));
                           }).catch(error => {
                               hubsControllerLog(logStylers.genericError('Error updating hub: '), logStylers.values(JSON.stringify(targetHub)), logStylers.values(error.message), error.stack);

                               return res.status(400)
                                         .send(helpers.responseHelpers.updateFailure(contextName, error.message));
                           })
              }).catch(error => {
                  hubsControllerLog(logStylers.genericError('Error updating hub (outer): '), logStylers.values(error.message), error.stack);

                  return res.status(400)
                            .send(helpers.responseHelpers.updateFailure(contextName, error.message));
              });
}

const deleteHub = (req, res) => {
    const hubIdToDelete = req.params.hubId;

    const contextObject = {
        id: hubIdToDelete,
    };

    const query = {
        where: contextObject,
    };

    return hub.destroy(query)
                 .then(() => {
                     hubsControllerLog(logStylers.genericSuccess('Hub successfully deleted! ID: '), logStylers.values(hubIdToDelete));

                     return res.status(203)
                               .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'))
                 })
                 .catch((error) => {
                     hubsControllerLog(logStylers.genericError(`Error deleting hub. ID: ${logStylers.values(hubIdToDelete)} `), logStylers.values(error.message), error.stack);

                     return res.status(403)
                               .send(helpers.responseHelpers.deleteFailure(contextName, error.message))
                 });
}

export default {
  addHub,
  getAllHubs,
  updateHub,
  deleteHub,
}
