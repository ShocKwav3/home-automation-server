class socketServer {
  constructor(io) {
    this.io = io;
  };

  onNewSensorData = (data, nextTask) => {
    this.io.emit('newSensorDataForClient', data);

    if(nextTask) nextTask();
  };

  onDisconnect = () => {
    console.log('DISCONECTED');
  };

  afterSocketConnection = (socket) => {
    socket.on('newSensorData', this.onNewSensorData);

    socket.on('disconnect', this.onDisconnect);
  };

  connection = () => {
    this.io.on('connection', this.afterSocketConnection);
  };
};

export default socketServer;