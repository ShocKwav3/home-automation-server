import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.put('/:hubId', controllers.hubsController.updateHub);

router.delete('/:hubId', controllers.hubsController.deleteHub);


export default router;