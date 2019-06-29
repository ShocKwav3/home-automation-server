import express from 'express';
import controllers from '../../../../controllers';
let router = express.Router();



router.get('/', controllers.sensorDataController.getAllSensorData);


router.post('/', controllers.sensorDataController.addSensorData);

export default router;