import express from 'express';
import path from 'path';
import logger from 'morgan';

import routes from 'projectRoot/routes';
import middlewares from 'projectRoot/middlewares';
import helpers from 'projectRoot/helpers';


const app = express();

const cacheClient = helpers.apiCacheHelpers.connect();

app.set('cacheClient', cacheClient)

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.cacheMiddlewares.checkApiCache);

app.use('/', routes);


export default app;