import express from 'express';

import controllers from 'projectRoot/src/controllers';


let router = express.Router();

router.get('/', controllers.deviceDataController.getAllDeviceData);

router.post('/', controllers.deviceDataController.addDeviceData);


export default router;