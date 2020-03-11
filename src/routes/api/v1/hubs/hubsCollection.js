import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.get('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.hubsController.getAllHubs);

router.post('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.hubsController.addHub);


export default router;