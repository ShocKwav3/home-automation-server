import express from 'express';

import middlewares from 'src/middlewares';
import deviceDataCollection from './deviceDataCollection';


const router = express.Router();

router.use('/', middlewares.cacheMiddlewares.prepareCacheHandler(), deviceDataCollection);


export default router;
