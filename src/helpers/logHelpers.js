import chalk from 'chalk';

const genericPending = (message) => chalk.blue.underline(message);

const genericError = (message) => chalk.bgRed.bold(message);

const genericSuccess = (message) => chalk.green(message);

const genericFailure = (message) => chalk.bgYellow.black(message);

const authFailure = (message) => chalk.bgYellow.red.italic(message);

const authSuccess = (message) => chalk.yellow(message);

const values = (int) => chalk.magentaBright(int);


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
