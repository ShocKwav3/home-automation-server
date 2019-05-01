import model from '../../models';
import helpers from '../../helpers';
const { device, sensor_data, actuator_activity } = model;


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

  return device.create(deviceData)
               .then(deviceDataSynced =>
                 res.status(201)
                 .send(helpers.responseHelpers.addSuccess('Device', deviceDataSynced))
               ).catch(error =>
                res.status(401)
                .send(helpers.responseHelpers.addFailure('Device', error))
               );
};

const getAllDevices = (req, res) => {
  return device.findAll()
               .then(allDevices =>
                 res.status(200)
                 .send(helpers.responseHelpers.fetchSuccess('Device', allDevices))
               ).catch(error =>
                 res.status(400)
                 .send(helpers.responseHelpers.fetchFailure('Device', error))
               );
};

const updateDevice = (req, res) => {
  const deviceIdToUpdate = req.params.deviceId

  return device.findByPk(deviceIdToUpdate)
               .then(targetDevice => {
                 targetDevice.update(req.body, { fields: Object.keys(req.body) })
                 .then(deviceDataUpdated =>
                   res.status(200)
                   .send(helpers.responseHelpers.updateSuccess('Device', deviceDataUpdated))
                 ).catch(error =>
                   res.status(400)
                   .send(helpers.responseHelpers.updateFailure('Device', error))
                 )
               })
               .catch(error =>
                 res.status(400)
                 .send(helpers.responseHelpers.updateFailure('Device', error))
               );
};

const deleteDevice = (req, res) => {
  const deviceIdToUpdate = req.params.deviceId

  return device.findByPk(deviceIdToUpdate)
               .then(targetDevice => {
                 targetDevice.destroy()
                 .then(() =>
                   res.status(200)
                   .send(helpers.responseHelpers.deleteSuccess('Device'))
                 ).catch(error =>
                   res.status(400)
                   .send(helpers.responseHelpers.deleteFailure('Device', error))
                 )
               })
               .catch(error =>
                 res.status(400)
                 .send(helpers.responseHelpers.deleteFailure('Device', error))
               );
}

const devicesController = {
  addDevice,
  getAllDevices,
  updateDevice,
  deleteDevice,
};


export default devicesController;