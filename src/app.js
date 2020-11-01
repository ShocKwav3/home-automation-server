import express from 'express';
import helmet from 'helmet';
import path from 'path';
import logger from 'morgan';

import routes from 'src/routes';
import middlewares from 'src/middlewares';


const app = express();

//NOTE: 1st logger for request, 2nd one for after response is returned
app.use(logger('[:date[iso]] :method :url', {immediate: true}));
app.use(logger('[:date[iso]] :method :url :status :response-time ms'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

app.use(middlewares.forceHttpsMiddleware.forceHttps);
app.use(middlewares.rateLimiterMiddleware.rateLimiter);
app.use(middlewares.tokenMiddlewares.verifyToken);
app.use(middlewares.cacheMiddlewares.checkApiCache);

app.use('/', routes);


export default app;
