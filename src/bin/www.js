#!/usr/bin/env node

import http from 'http';
import debug from 'debug';

import app from 'src/app';
import socket from 'src/socket';
import db from 'src/models';

const debugServer = debug('plant-monitor-server:server');
const httpServer = http.Server(app);
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const socketConnection = new socket.socketServer(httpServer, port);
socketConnection.connection();

/**
 * Create HTTP server.
 */

const serverCreated = () => {
    console.log(`Server running on port ${port}`);
}

/**
 * Check if database connection is ok before initiating server
 */

console.log("Database connection: TRYING ");
db.sequelize.authenticate()
            .then(function () {
                console.log("Database connection: OK ");
                initiateServer(port);
            })
            .catch(function (err) {
                console.error("Database connection: FAILED ", err)
                process.exit(1);
            });

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

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
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
    var addr = httpServer.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debugServer('Listening on ' + bind);
}

/**
 * Listen on provided port, on all network interfaces.
 */
function initiateServer(port) {
    httpServer.listen(port, serverCreated);
    httpServer.on('error', onError);
    httpServer.on('listening', onListening);
}


export default httpServer;
