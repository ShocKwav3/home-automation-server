import model from '../../models';
import helpers from '../../helpers';
import { controllerConstants } from '../../config/constants';

const { sensor_data } = model;
const contextName = controllerConstants.sensorData.CONTEXTNAME
const socketEventName = controllerConstants.sensorData.SOCKETEVENT


const addSensorData = (req, res) => {
  const {
    sensor_device_id,
    created_timestamp,
    sensor_value,
  } = req.body;

  const sensorData = {
    sensor_device_id,
    created_timestamp,
    sensor_value,
  };

  const cacheClient = res.locals.cacheClient
  const cacheKey = res.locals.cacheKey
  const shouldFireSocketEvent = true

  return sensor_data.create(sensorData)
                    .then(sensorDataSynced =>
                      helpers.controllerHelpers.afterCreateSuccess(res, sensorDataSynced, contextName, cacheClient, cacheKey, shouldFireSocketEvent, socketEventName)
                    ).catch(error =>
                      res.status(401)
                      .send(helpers.responseHelpers.addFailure(contextName, error))
                    );
};

const getAllSensorData = (req, res) => {
  const cacheClient = res.locals.cacheClient
  const cacheKey = res.locals.cacheKey

  return sensor_data.findAll()
                    .then(allSensorData =>
                      helpers.controllerHelpers.afterFetchSuccess(res, allSensorData, contextName, cacheClient, cacheKey)
                    ).catch(error =>
                      res.status(400)
                      .send(helpers.responseHelpers.fetchFailure(contextName, error))
                    );
};


export default {
  addSensorData,
  getAllSensorData,
};