#!/usr/bin/env node
//NOTE: DEBUG='HA:serverStatus' check logHelpers.js for more options

import https from 'https';
import fs from 'fs';
import { RateLimiterRedis } from 'rate-limiter-flexible';

import app from 'src/app';
import socket from 'src/socket';
import db from 'src/models';
import helpers from 'src/helpers';
import  { serverStatusesLog, logStylers } from 'src/helpers/logHelpers';
import { rateLimiterConfig } from 'src/config/rateLimiterConfig';


const httpsServer = https.Server({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
}, app);
const port = normalizePort(process.env.PORT || '3000');

/**
 * Initiate socket
 */
const socketConnection = new socket.socketServer(httpsServer, port);
socketConnection.connection();

/**
 * Connect/reconnect/error logic for redis
 */
const cacheClient = helpers.apiCacheHelpers.connect(process.env.REDIS_HOST)
cacheClient.on('error', function (error) {
    serverStatusesLog('Redis connection: ', logStylers.genericError('Failed\n'), error.message, logStylers.values('Retrying...'));
})

cacheClient.on('connect', function () {
    serverStatusesLog('Redis connection: ', logStylers.genericSuccess('Connected'));
})

const rateLimiter = new RateLimiterRedis({...rateLimiterConfig, storeClient: cacheClient});

app.set('cacheClient', cacheClient);
app.set('port', port);
app.set('rateLimiter', rateLimiter);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
};

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    //NOTE: handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            serverStatusesLog(logStylers.values(bind), logStylers.genericError(' requires elevated privileges'));
            process.exit(1);
            break;
        case 'EADDRINUSE':
            serverStatusesLog(logStylers.values(bind), logStylers.genericError(' is already in use'));
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = httpsServer.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    serverStatusesLog(logStylers.genericSuccess('Debug server listening on ') + logStylers.values(bind));
}

/**
 * Runs after server is created
 */

const afterServerCreated = () => {
    serverStatusesLog(logStylers.genericSuccess('Server running on port: '), logStylers.values(port));
}

/**
 * Create server listening on provided port, on all network interfaces.
 */
function initiateServer(port) {
    httpsServer.listen(port, afterServerCreated);
    httpsServer.on('error', onError);
    httpsServer.on('listening', onListening);
}

/**
 * Check database connection status
 */
serverStatusesLog('Database connection status: ', logStylers.genericPending('Checking...'));
db.sequelize.authenticate()
            .then(function (){
                serverStatusesLog('Database connection: ', logStylers.genericSuccess('OK'));

                initiateServer(port);
            })
            .catch(function (error) {
                serverStatusesLog(logStylers.genericError('Database connection: FAILED'), error.message, '\nExiting...')

                process.exit(1);
            })


export default httpsServer;
