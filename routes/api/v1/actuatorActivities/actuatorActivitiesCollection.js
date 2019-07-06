import express from 'express';

import controllers from 'projectRoot/controllers';


let router = express.Router();

router.get('/', controllers.actuatorActivitiesController.getAllActuatorActivities);

router.post('/', controllers.actuatorActivitiesController.addActuatorActivity);


export default router;