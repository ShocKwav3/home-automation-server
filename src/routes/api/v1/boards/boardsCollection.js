import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


let router = express.Router();

router.get('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.boardsController.getAllBoards);

router.post('/', middlewares.cacheMiddlewares.prepareCacheHandler(), controllers.boardsController.addBoard);


export default router;
