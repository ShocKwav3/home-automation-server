import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.get('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.deviceDataController.getAllDeviceData);
router.get('/role/:roleId', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.deviceDataController.getDeviceDataByRole);
router.get('/category/:categoryId', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.deviceDataController.getDeviceDataByCategory);

router.post('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.deviceDataController.addDeviceData);


export default router;
