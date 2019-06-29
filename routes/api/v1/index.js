import express from 'express';
import actuatorActivities from './actuatorActivities';
import devices from './devices';
import sensorData from './sensorData';
let router = express.Router();


router.use('/actuatorActivities', actuatorActivities);
router.use('/devices', devices);
router.use('/sensorData', sensorData);


export default router;