import socketIO from 'socket.io';


class socketServer {
  constructor(httpServer, port) {
    this.io = socketIO(httpServer);

    console.log(`Socket ready on ${port}`)
  };

  onNewSensorData = (data, nextTask) => {
    this.io.emit('newSensorDataForClient', data);

    if(nextTask) nextTask();
  };

  onNewActuatorActivity = (data, nextTask) => {
    this.io.emit('newActuatorActivityForClient', data);

    if(nextTask) nextTask();
  }

  onDisconnect = () => {
    console.log('DISCONECTED');
  };

  afterSocketConnection = (socket) => {
    console.log("NEW SOCKET CONNECTION")

    socket.on('newSensorData', this.onNewSensorData);

    socket.on('newActuatorActivity', this.onNewActuatorActivity);

    socket.on('disconnect', this.onDisconnect);
  };

  connection = () => {
    this.io.on('connection', this.afterSocketConnection);
  };
};

export default socketServer;