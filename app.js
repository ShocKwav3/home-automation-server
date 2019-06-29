import express from 'express';
import path from 'path';
import logger from 'morgan';
//import cookieParser from 'cookie-parser';

import routes from './routes';


const app = express();

app.use(logger('dev'));
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

export default app;