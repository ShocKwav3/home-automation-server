import model from 'projectRoot/models';
import helpers from 'projectRoot/helpers';
import { controllerConstants } from 'projectRoot/config/constants';

const { device } = model;
const contextName = controllerConstants.device.CONTEXTNAME


const addDevice = (req, res) => {
  const {
    name,
    role,
    type,
    io_pin,
    added_timestamp,
    min_value,
    max_value,
  } = req.body;

  const deviceData = {
    name,
    role,
    type,
    io_pin,
    added_timestamp,
    min_value,
    max_value,
  }

  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey

  return device.create(deviceData)
               .then(deviceDataSynced =>
                  helpers.controllerHelpers.afterCreateSuccess(res, deviceDataSynced, contextName, cacheClient, cacheKey)
               ).catch(error =>
                res.status(401)
                .send(helpers.responseHelpers.addFailure(contextName, error))
               );
};

const getAllDevices = (req, res) => {
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = res.locals.cacheKey

  return device.findAll()
               .then(allDevices =>
                  helpers.controllerHelpers.afterFetchSuccess(res, allDevices, contextName, cacheClient, cacheKey)
               ).catch(error =>
                 res.status(400)
                 .send(helpers.responseHelpers.fetchFailure(contextName, error))
               );
};

const updateDevice = (req, res) => {
  const deviceIdToUpdate = req.params.deviceId
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = helpers.utils.constructString('remove', 'end', `/${deviceIdToUpdate}`, res.locals.cacheKey)

  req.body.updated_timestamp = new Date().toISOString()

  return device.findByPk(deviceIdToUpdate)
               .then(targetDevice => {
                 targetDevice.update(req.body, { fields: Object.keys(req.body) })
                 .then(deviceDataUpdated =>
                   helpers.controllerHelpers.afterUpdateSuccess(res, deviceDataUpdated, contextName, cacheClient, cacheKey, 'update')
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

const deleteDevice = (req, res) => {
  const deviceIdToDelete = req.params.deviceId
  const cacheClient = req.app.get('cacheClient')
  const cacheKey = helpers.utils.constructString('remove', 'end', `/${deviceIdToDelete}`, res.locals.cacheKey)

  return device.findByPk(deviceIdToDelete)
               .then(targetDevice => {
                 targetDevice.destroy()
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
  addDevice,
  getAllDevices,
  updateDevice,
  deleteDevice,
};