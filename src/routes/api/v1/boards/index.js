import express from 'express';

import boards from './boards';
import boardsCollection from './boardsCollection';


const router = express.Router();

router.use('/', boards);
router.use('/', boardsCollection);


export default router;
