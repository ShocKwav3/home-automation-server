import express from 'express';

import deviceDataCollection from './deviceDataCollection';


const router = express.Router();

router.use('/', deviceDataCollection);


export default router;
