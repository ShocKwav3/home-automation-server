import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


const router = express.Router();

router.put('/:deviceId', middlewares.cacheMiddlewares.prepareCacheHandler('deviceId'), controllers.devicesController.updateDevice);

router.delete('/:deviceId', middlewares.cacheMiddlewares.prepareCacheHandler('deviceId'), controllers.devicesController.deleteDevice);


export default router;
