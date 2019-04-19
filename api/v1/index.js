import express from 'express';
import activities from './activities';
//import devices from './devices';
let router = express.Router();


router.use('/activities', activities);
//router.use('/devices', devices);


export default router;