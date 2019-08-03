import express from 'express';

import sensorDataCollection from './sensorDataCollection';


const router = express.Router();

router.use('/', sensorDataCollection);


export default router;