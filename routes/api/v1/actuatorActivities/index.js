import express from 'express';

import actuatorActivitiesCollection from './actuatorActivitiesCollection';


const router = express.Router();

router.use('/', actuatorActivitiesCollection);


export default router;