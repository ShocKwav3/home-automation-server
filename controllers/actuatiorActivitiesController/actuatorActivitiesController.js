import model from '../../models';
import helpers from '../../helpers';
const { actuator_activity } = model;


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

  return actuator_activity.create(actuatiorActivityData)
                          .then(actuatiorActivityDataSynced =>
                            res.status(201)
                            .send(helpers.responseHelpers.addSuccess('Actuator activity', actuatiorActivityDataSynced))
                          ).catch(error =>
                            res.status(401)
                            .send(helpers.responseHelpers.addFailure('Actuator activity', error))
                          );
};

const getAllActuatorActivities = (req, res) => {
  return actuator_activity.findAll()
                          .then(allActuatorActivities =>
                            res.status(200)
                            .send(helpers.responseHelpers.fetchSuccess('Actuator activities', allActuatorActivities))
                          ).catch(error =>
                            res.status(400)
                            .send(helpers.responseHelpers.fetchFailure('Actuator activities', error))
                          );
};

const actuatorActivitiesController = {
  addActuatorActivity,
  getAllActuatorActivities,
};


export default actuatorActivitiesController;