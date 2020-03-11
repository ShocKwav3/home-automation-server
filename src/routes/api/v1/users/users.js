import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.put('/:userId', controllers.usersController.updateUser);

router.delete('/:userId', controllers.usersController.deleteUser);


export default router;
