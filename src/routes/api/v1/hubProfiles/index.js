import express from 'express';

import hubProfiles from './hubProfiles';
import hubProfilesCollection from './hubProfilesCollection';


const router = express.Router();

router.use('/', hubProfiles);
router.use('/', hubProfilesCollection);


export default router;
