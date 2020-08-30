import express from 'express';
import path from 'path';
import logger from 'morgan';

import routes from 'src/routes';
import middlewares from 'src/middlewares';


const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.tokenMiddlewares.verifyToken);
app.use(middlewares.cacheMiddlewares.checkApiCache);

app.use('/', routes);


export default app;
