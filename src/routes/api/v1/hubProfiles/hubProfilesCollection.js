import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.get('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.hubProfilesController.getAllHubProfiles);

router.post('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.hubProfilesController.addHubProfile);


export default router;
