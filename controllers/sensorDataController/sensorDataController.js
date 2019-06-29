import model from '../../models';
import helpers from '../../helpers';
import socket from '../../socket';

const { sensor_data } = model;


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

  return sensor_data.create(sensorData)
                    .then(sensorDataSynced =>
                      afterCreateSuccess(sensorDataSynced, res)
                    ).catch(error =>
                      res.status(401)
                      .send(helpers.responseHelpers.addFailure('Sensor data', error))
                    );
};

const afterCreateSuccess = (sensorDataSynced, res) => {
  const updaterSocket = socket.socketClient.connect();
  socket.socketClient.fireEvent(updaterSocket, 'newSensorData', sensorDataSynced, true);

  return res.status(201)
            .send(helpers.responseHelpers.addSuccess('Sensor data', sensorDataSynced));
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