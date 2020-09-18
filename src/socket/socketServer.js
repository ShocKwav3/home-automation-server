import socketIO from 'socket.io';
import  { socketLog, logStylers } from 'src/helpers/logHelpers';


class socketServer {
    constructor(httpServer, port) {
        this.io = socketIO(httpServer);

        socketLog(logStylers.genericSuccess('Socket ready and listening on port: '), logStylers.values(port));
    }

    onNewDeviceData = (data, nextTask) => {
        this.io.emit('newDeviceDataForClient', data);

        if(nextTask) nextTask();
    }

    onDisconnect = () => {
        socketLog(logStylers.genericSuccess('Socket disconnected'));
    }

    afterSocketConnection = (socket) => {
        socketLog(logStylers.genericSuccess('New socket connection'));

        socket.on('newDeviceData', this.onNewDeviceData);

        socket.on('disconnect', this.onDisconnect);
    }

    connection = () => {
        this.io.on('connection', this.afterSocketConnection);
    }
}


export default socketServer;
