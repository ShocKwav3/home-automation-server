import socketIO from 'socket.io';


class socketServer {
  constructor(httpServer, port) {
    this.io = socketIO(httpServer);

    console.log(`Socket ready on ${port}`);
  }

  onNewDeviceData = (data, nextTask) => {
    this.io.emit('newDeviceDataForClient', data);

    if(nextTask) nextTask();
  }

  onDisconnect = () => {
    console.log('DISCONECTED');
  }

  afterSocketConnection = (socket) => {
    console.log("NEW SOCKET CONNECTION");

    socket.on('newDeviceData', this.onNewDeviceData);

    socket.on('disconnect', this.onDisconnect);
  }

  connection = () => {
    this.io.on('connection', this.afterSocketConnection);
  }
}

export default socketServer;
