import express from 'express';

import controllers from 'src/controllers';


let router = express.Router();

router.get('/', controllers.categoriesController.getAllCategories);


export default router;