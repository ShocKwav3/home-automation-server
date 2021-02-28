import express from 'express';

import controllers from 'src/controllers';
import middlewares from 'src/middlewares';


const router = express.Router();

router.put('/:boardId', middlewares.cacheMiddlewares.prepareCacheHandler('boardId'), controllers.boardsController.updateBoard);

router.delete('/:boardId', middlewares.cacheMiddlewares.prepareCacheHandler('boardId'), controllers.boardsController.deleteBoard);


export default router;
