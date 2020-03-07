import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.get('/', controllers.hubsController.getAllHubs);

router.post('/', controllers.hubsController.addHub);


export default router;