import express from 'express';

import controllers from 'src/controllers';


const router = express.Router();

router.post('/signUp', controllers.usersController.addUser);

router.post('/login', controllers.usersController.loginUser);

router.get('/', controllers.usersController.getAllUsers);

router.get('/refreshToken', controllers.usersController.getRefreshToken);

export default router;
