import express from 'express';
import path from 'path';
import logger from 'morgan';

import routes from 'projectRoot/routes';
import middlewares from 'projectRoot/middlewares';


const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.cacheMiddlewares.checkApiCache)

app.use('/', routes);

export default app;