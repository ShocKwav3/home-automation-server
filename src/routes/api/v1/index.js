import express from 'express';

import deviceData from './deviceData';
import devices from './devices';
import users from './users';
import roles from './roles';
import hubs from './hubs';
import categories from './categories';


let router = express.Router();

router.use('/deviceData', deviceData);
router.use('/devices', devices);
router.use('/users', users);
router.use('/roles', roles);
router.use('/hubs', hubs);
router.use('/categories', categories);


export default router;
