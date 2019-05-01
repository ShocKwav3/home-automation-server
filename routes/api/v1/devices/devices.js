import express from 'express';
import controllers from '../../../../controllers';
let router = express.Router();


router.put('/:deviceId', controllers.devicesController.updateDevice);

router.delete('/:deviceId', controllers.devicesController.deleteDevice);


export default router;