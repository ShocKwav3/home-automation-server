import socket from '../socket';
import responseHelpers from './responseHelpers';


const afterCreateSuccess = (res, synchedData, contextName, cacheClient, cacheKey, shouldFireSocketEvent=false, socketEventName) => {
  cacheClient.del(cacheKey);

  if(shouldFireSocketEvent){
    const updaterSocket = socket.socketClient.connect();
    socket.socketClient.fireEvent(updaterSocket, socketEventName, synchedData, true);
  }

  return res.status(201)
            .send(responseHelpers.addSuccess(contextName, synchedData));
};

const afterFetchSuccess = (res, synchedData, contextName, cacheClient, cacheKey) => {
  const response = responseHelpers.fetchSuccess(contextName, synchedData)

  cacheClient.set(cacheKey, JSON.stringify(response));

  return res.status(200).send(response);
};

const afterUpdateSuccess = (res, synchedData, contextName, cacheClient, cacheKey, updateType) => {
  const responseHelperMethod = updateType === 'delete' ? responseHelpers.deleteSuccess : responseHelpers.updateSuccess;

  cacheClient.del(cacheKey);

  return res.status(201)
            .send(responseHelperMethod(contextName, synchedData));
};


export default {
  afterCreateSuccess,
  afterFetchSuccess,
  afterUpdateSuccess,
};