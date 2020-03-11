import express from 'express';

import controllers from 'projectRoot/src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.get('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.devicesController.getAllDevices);

router.post('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.devicesController.addDevice);


export default router;