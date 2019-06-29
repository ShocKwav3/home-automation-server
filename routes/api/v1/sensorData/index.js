import express from 'express';
//import sensorData from './sensorData';
import sensorDataCollection from './sensorDataCollection';
const router = express.Router();


router.use('/', sensorDataCollection);
//router.use('/:deviceRole', activities);

export default router;