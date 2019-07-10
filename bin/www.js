#!/usr/bin/env node

import http from 'http';
import debug from 'debug';

import app from 'projectRoot/app';
import socket from 'projectRoot/socket';

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
};


/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port, serverCreated);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

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


export default httpServer