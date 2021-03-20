import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


const router = express.Router();

router.put('/:hubProfileId', middlewares.cacheMiddlewares.prepareCacheHandler('hubProfileId'), controllers.hubProfilesController.updateHubProfile);

router.delete('/:hubProfileId', middlewares.cacheMiddlewares.prepareCacheHandler('hubProfileId'), controllers.hubProfilesController.deleteHubProfile);


export default router;
