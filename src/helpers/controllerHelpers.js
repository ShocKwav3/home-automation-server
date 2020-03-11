import socket from 'src/socket';
import responseHelpers from './responseHelpers';


const afterCreateSuccess = (syncedData, contextName, cacheHandler, shouldFireSocketEvent=false, socketEventName) => {
    if(typeof cacheHandler === 'function') {
        cacheHandler('del');
    }

    if(shouldFireSocketEvent){
        const updaterSocket = socket.socketClient.connect();
        socket.socketClient.fireEvent(updaterSocket, socketEventName, syncedData, true);
    };

    return responseHelpers.addSuccess(contextName, syncedData);
}

const afterFetchSuccess = (syncedData, contextName, cacheHandler) => {
    const response = responseHelpers.fetchSuccess(contextName, syncedData);
    
    if(typeof cacheHandler === 'function') {
        cacheHandler('set', syncedData);
    }

    return response;
}

const afterUpdateSuccess = (syncedData, contextName, cacheHandler, updateType) => {
    const responseHelperMethod = updateType === 'delete' ? responseHelpers.deleteSuccess : responseHelpers.updateSuccess;

    if(typeof cacheHandler === 'function') {
        cacheHandler('del');
    }

    return responseHelperMethod(contextName, syncedData);
}


export default {
  afterCreateSuccess,
  afterFetchSuccess,
  afterUpdateSuccess,
}
