import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.post('/signUp', controllers.usersController.addUser);

router.post('/login', controllers.usersController.loginUser);


export default router;
