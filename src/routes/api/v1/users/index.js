import express from 'express';

import users from './users';
import usersCollection from './usersCollection';


const router = express.Router();

router.use('/', usersCollection);
router.use('/', users);


export default router;
