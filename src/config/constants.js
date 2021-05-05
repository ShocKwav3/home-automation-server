const controllerConstants = {
    deviceData: {
        CONTEXTNAME: 'Device Data',
        SOCKETEVENT: 'newDeviceData',
    },
    device: {
        CONTEXTNAME: 'Device',
    },
    user: {
        CONTEXTNAME: 'USER',
    },
    role: {
        CONTEXTNAME: 'Role',
    },
    hub: {
        CONTEXTNAME: 'hub',
    },
    category: {
        CONTEXTNAME: 'category',
    },
    board: {
        CONTEXTNAME: 'board',
    },
    hub_profile: {
        CONTEXTNAME: 'hub_profile',
    },
};

const passwordSaltingTimes = 10;
const tokenExpiryHour = 1;

export default {
    controllerConstants,
    passwordSaltingTimes,
    tokenExpiryHour,
};
