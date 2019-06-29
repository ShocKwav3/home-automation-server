import express from 'express';
import devices from './devices';
import devicesCollection from './devicesCollection';
const router = express.Router();


router.use('/', devicesCollection);
router.use('/', devices);

export default router;