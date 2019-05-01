import express from 'express';
import controllers from '../../../../controllers';
let router = express.Router();


router.get('/', controllers.devicesController.getAllDevices);

router.post('/', controllers.devicesController.addDevice);


export default router;