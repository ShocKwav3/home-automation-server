import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.get('/', controllers.deviceDataController.getAllDeviceData);
router.get('/role/:roleId', controllers.deviceDataController.getDeviceDataByRole);
router.get('/category/:categoryId', controllers.deviceDataController.getDeviceDataByCategory);

router.post('/', controllers.deviceDataController.addDeviceData);


export default router;
