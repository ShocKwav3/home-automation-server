import express from 'express';
//import activities from './activities';
import actuatorActivitiesCollection from './actuatorActivitiesCollection';
const router = express.Router();


router.use('/', actuatorActivitiesCollection);
//router.use('/:deviceRole', activities);

export default router;