import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { hub_profile } = model;
const contextName = controllerConstants.hub_profile.CONTEXTNAME;
const hubProfileControllerLog = controllerLog(contextName);

const addHubProfile = (req, res) => {
    const hubProfileData = {
        name: req.body.name,
        settings: req.body.settings,
        added_timestamp: req.body.added_timestamp,
    };

    return hub_profile.create(hubProfileData)
                      .then(hubProfileDataSynced => {
                          hubProfileControllerLog(logStylers.genericSuccess('Hub profile created successfully. Values:\n'), logStylers.values(JSON.stringify(hubProfileDataSynced)));

                          return res.status(201)
                                    .send(helpers.controllerHelpers.afterCreateSuccess(hubProfileDataSynced, contextName, res.locals.cacheHandler))
                      }).catch(error => {
                          hubProfileControllerLog(logStylers.genericError('Error creating hub profile. Message: '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(401)
                                    .send(helpers.responseHelpers.addFailure(contextName, error.message))
                      });
}

const getAllHubProfiles = (req, res) => {
    return hub_profile.findAll()
                      .then(allHubProfiles => {
                          hubProfileControllerLog(logStylers.genericSuccess('Hub profile fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allHubProfiles)));

                          return res.status(200)
                                    .send(helpers.controllerHelpers.afterFetchSuccess(allHubProfiles, contextName, res.locals.cacheHandler))
                      }).catch(error => {
                          hubProfileControllerLog(logStylers.genericError('Error fetching hub profiles: '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(400)
                                    .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                      });
}

const updateHubProfile = (req, res) => {
    const hubProfileIdToUpdate = req.params.hubProfileId;
    const requestedChanges = {
        ...req.body,
        updated_timestamp: new Date().toISOString(),
    }
    const query = {
        fields: Object.keys(requestedChanges),
        returning: true,
        where: {
            id: hubProfileIdToUpdate,
        },
    };

    return hub_profile.update(requestedChanges, query)
                      .then(hubProfileDataUpdateInformation => {
                          const [numberOfRowsAffected, updatedHubProfileData] = hubProfileDataUpdateInformation;

                          //NOTE: Since this is allowed to update only a single hub profile through the route, the updated hub profile data will always contain a single changed row thus we are using updatedDeviceData[0];
                          hubProfileControllerLog(`${logStylers.genericSuccess('Hub profile successfully updated! ')}, Incoming: ${logStylers.values(JSON.stringify(req.body))} After change: ${logStylers.values(JSON.stringify(updatedHubProfileData[0]))}`);

                          return res.status(202)
                                    .send(helpers.controllerHelpers.afterUpdateSuccess(updatedHubProfileData[0], contextName, res.locals.cacheHandler, 'update'))
                      }).catch(error => {
                          hubProfileControllerLog(logStylers.genericError('Error updating hub profile: '), logStylers.values(JSON.stringify(hubProfileIdToUpdate)), logStylers.values(error.message), error.stack);

                          return res.status(402)
                                    .send(helpers.responseHelpers.updateFailure(contextName, error.message))
                      })
}

const deleteHubProfile = (req, res) => {
    const hubProfileIdToDelete = req.params.hubProfileId;
    const query = {
        where: {
            id: hubProfileIdToDelete,
        },
    };

    return hub_profile.destroy(query)
                      .then(() => {
                          hubProfileControllerLog(logStylers.genericSuccess('Hub profile successfully deleted! ID: '), logStylers.values(hubProfileIdToDelete));

                          return res.status(203)
                                    .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'))
                      }).catch((error) => {
                          hubProfileControllerLog(logStylers.genericError(`Error deleting hub profile. ID: ${logStylers.values(hubProfileIdToDelete)} `), logStylers.values(error.message), error.stack);

                          return res.status(403)
                                    .send(helpers.responseHelpers.deleteFailure(contextName, error.message))
                      });
}

export default {
    addHubProfile,
    getAllHubProfiles,
    updateHubProfile,
    deleteHubProfile,
}
