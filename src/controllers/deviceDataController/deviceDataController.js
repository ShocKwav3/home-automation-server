import model from 'projectRoot/src/models';
import helpers from 'projectRoot/src/helpers';
import { controllerConstants } from 'projectRoot/src/config/constants';

const { device_data } = model;
const contextName = controllerConstants.deviceData.CONTEXTNAME
const socketEventName = controllerConstants.deviceData.SOCKETEVENT

const addDeviceData = (req, res) => {
  const {
    created_timestamp,
    device_id,
    device_value,
    initiator_id,
    initiator_role_id,
  } = req.body

  const deviceData = {
    created_timestamp,
    device_id,
    device_value,
    initiator_id,
    initiator_role_id,
  }

  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey
  const shouldFireSocketEvent = true

  return device_data.create(deviceData)
                          .then(deviceDataSynced =>
                            helpers.controllerHelpers.afterCreateSuccess(res, deviceDataSynced, contextName, cacheClient, cacheKey, shouldFireSocketEvent, socketEventName)
                          ).catch(error =>
                            res.status(401)
                            .send(helpers.responseHelpers.addFailure(contextName, error))
                          );
};

const getAllDeviceData = (req, res) => {
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey

  return device_data.findAll()
                          .then(allDeviceData =>
                            helpers.controllerHelpers.afterFetchSuccess(res, allDeviceData, contextName, cacheClient, cacheKey)
                          ).catch(error =>
                            res.status(400)
                            .send(helpers.responseHelpers.fetchFailure(contextName, error))
                          );
};


export default {
  addDeviceData,
  getAllDeviceData,
};