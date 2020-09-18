import debug from 'debug';
import chalk from 'chalk';

const genericPending = (message) => chalk.blue.underline(message);

const genericError = (message) => chalk.bgRed.bold(message);

const genericSuccess = (message) => chalk.green(message);

const genericFailure = (message) => chalk.bgYellow.black(message);

const authFailure = (message) => chalk.bgYellow.red.italic(message);

const authSuccess = (message) => chalk.yellow(message);

const values = (values) => chalk.magentaBright(values);


export const logStylers = {
    genericPending,
    genericError,
    genericSuccess,
    genericFailure,
    authFailure,
    authSuccess,
    values,
};

export const printLog = console.log;
export const serverStatusesLog = debug('HA:serverStatus');
export const cacheLog = debug('HA:cacheMiddleware');
export const tokenLog = debug('HA:tokenMiddleware');
export const socketLog = debug('HA:socketIO');
export const controllerLog = (controllerContext) => debug(`HA:controllers:${controllerContext}`);
