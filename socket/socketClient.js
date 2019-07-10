import io from 'socket.io-client';


const connect = (socketServer='http://localhost:3000') => io(socketServer);

const fireEvent = (socket, name, data, disconnectAfterTransmission) => {
  const disconnectSocket = disconnectAfterTransmission ? socket.disconnect : undefined;

  socket.emit(name, {data}, disconnectSocket);
};

export default {
  connect,
  fireEvent,
};