import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.put('/:hubId', middlewares.cacheMiddlewares.prepareCacheHandler('hubId'), controllers.hubsController.updateHub);

router.delete('/:hubId', middlewares.cacheMiddlewares.prepareCacheHandler('hubId'), controllers.hubsController.deleteHub);


export default router;
