import express from 'express';

import controllers from 'src/controllers';


const router = express.Router();

router.get('/', controllers.rolesController.getAllRoles);


export default router;
