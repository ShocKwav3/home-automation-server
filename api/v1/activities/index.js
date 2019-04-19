import express from 'express';
//import activities from './activities';
import activitiesCollection from './activitiesCollection';
const router = express.Router();


router.use('/', activitiesCollection);
//router.use('/:deviceRole', activities);

export default router;