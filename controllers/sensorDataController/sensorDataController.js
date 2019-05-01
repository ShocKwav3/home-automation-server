import model from '../../models';
import helpers from '../../helpers';
const { sensor_data } = model;


const addSensorData = (req, res) => {
  const {
    sensor_device_id,
    created_timestamp,
    sensor_value,
  } = req.body

  const sensorData = {
    sensor_device_id,
    created_timestamp,
    sensor_value,
  }

  return sensor_data.create(sensorData)
                    .then(sensorDataSynced =>
                      res.status(201)
                      .send(helpers.responseHelpers.addSuccess('Sensor data', sensorDataSynced))
                    ).catch(error =>
                      res.status(401)
                      .send(helpers.responseHelpers.addFailure('Sensor data', error))
                    );
};

const getAllSensorData = (req, res) => {
  return sensor_data.findAll()
                    .then(allSensorData =>
                      res.status(200)
                      .send(helpers.responseHelpers.fetchSuccess('Sensor data', allSensorData))
                    ).catch(error =>
                      res.status(400)
                      .send(helpers.responseHelpers.fetchFailure('Sensor data', error))
                    );
};

const sensorDataController = {
  addSensorData,
  getAllSensorData,
};


export default sensorDataController;