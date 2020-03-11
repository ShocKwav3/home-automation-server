import express from 'express';
import path from 'path';
import logger from 'morgan';

import routes from 'src/routes';
import middlewares from 'src/middlewares';
import helpers from 'src/helpers';


const app = express();

const cacheClient = helpers.apiCacheHelpers.connect(process.env.REDIS_HOST);

app.set('cacheClient', cacheClient);

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.cacheMiddlewares.checkApiCache);

app.use('/', routes);


export default app;
