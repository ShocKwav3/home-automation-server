import express from 'express';

import hubs from './hubs';
import hubsCollection from './hubsCollection';


const router = express.Router();

router.use('/', hubsCollection);
router.use('/', hubs);


export default router;
