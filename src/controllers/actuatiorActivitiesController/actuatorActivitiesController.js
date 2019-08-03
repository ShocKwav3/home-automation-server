import model from 'projectRoot/src/models';
import helpers from 'projectRoot/src/helpers';
import { controllerConstants } from 'projectRoot/src/config/constants';

const { actuator_activity } = model;
const contextName = controllerConstants.actuatorActivity.CONTEXTNAME
const socketEventName = controllerConstants.actuatorActivity.SOCKETEVENT

const addActuatorActivity = (req, res) => {
  const {
    created_timestamp,
    name,
    actuator_device_id,
    sensor_device_id,
  } = req.body

  const actuatiorActivityData = {
    created_timestamp,
    name,
    actuator_device_id,
    sensor_device_id,
  }

  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey
  const shouldFireSocketEvent = true

  return actuator_activity.create(actuatiorActivityData)
                          .then(actuatiorActivityDataSynced =>
                            helpers.controllerHelpers.afterCreateSuccess(res, actuatiorActivityDataSynced, contextName, cacheClient, cacheKey, shouldFireSocketEvent, socketEventName)
                          ).catch(error =>
                            res.status(401)
                            .send(helpers.responseHelpers.addFailure(contextName, error))
                          );
};

const getAllActuatorActivities = (req, res) => {
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey

  return actuator_activity.findAll()
                          .then(allActuatorActivities =>
                            helpers.controllerHelpers.afterFetchSuccess(res, allActuatorActivities, contextName, cacheClient, cacheKey)
                          ).catch(error =>
                            res.status(400)
                            .send(helpers.responseHelpers.fetchFailure(contextName, error))
                          );
};


export default {
  addActuatorActivity,
  getAllActuatorActivities,
};