import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const {
    device,
    category,
    role,
    hub,
    user,
} = model;
const contextName = controllerConstants.device.CONTEXTNAME;
const deviceControllerLog = controllerLog(contextName);

const addDevice = (req, res) => {
    const {
        name,
        hub_id,
        category_id,
        io_pin,
        added_timestamp,
        min_value,
        max_value,
    } = req.body;

    const deviceData = {
        name,
        hub_id,
        category_id,
        io_pin,
        added_timestamp,
        min_value,
        max_value,
    };

    return device.create(deviceData)
                .then(deviceDataSynced => {
                    deviceControllerLog(logStylers.genericSuccess('Device created successfully. Values:\n'), logStylers.values(JSON.stringify(deviceDataSynced)));

                    return res.status(201)
                              .send(helpers.controllerHelpers.afterCreateSuccess(deviceDataSynced, contextName, res.locals.cacheHandler))
                }).catch(error => {
                    deviceControllerLog(logStylers.genericError('Error creating device. Message: '), logStylers.values(error.message), '\n', error.stack);

                    return res.status(401)
                              .send(helpers.responseHelpers.addFailure(contextName, error.message))
                });
}

const getAllDevices = (req, res) => {
    const query = {
        include: [
            {
                model: category,
                include: role,
            },
            {
                model: hub,
                include: user,
            },
        ],
    };

    return device.findAll(query)
                 .then(allDevices => {
                     deviceControllerLog(logStylers.genericSuccess('Devices fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDevices)));

                     return res.status(200)
                              .send(helpers.controllerHelpers.afterFetchSuccess(allDevices, contextName, res.locals.cacheHandler))
                 }).catch(error => {
                     deviceControllerLog(logStylers.genericError('Error fetching devices: '), logStylers.values(error.message), '\n', error.stack);

                     return res.status(400)
                               .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                 });
}

const updateDevice = (req, res) => {
    const deviceIdToUpdate = req.params.deviceId;
    const query = {
        fields: Object.keys(req.body),
        returning: true,
        where: {
            id: deviceIdToUpdate,
        },
    };

    req.body.updated_timestamp = new Date().toISOString();

    return device.update(req.body, query)
                 .then(deviceDataUpdated =>{
                     deviceControllerLog(`${logStylers.genericSuccess('Device successfully updated! ')}, Old: ${logStylers.values(JSON.stringify(req.body))} New: ${logStylers.values(JSON.stringify(deviceDataUpdated[1][0]))}`);

                     return res.status(202)
                               .send(helpers.controllerHelpers.afterUpdateSuccess(deviceDataUpdated[1][0], contextName, res.locals.cacheHandler, 'update'))
                 }).catch(error => {
                     deviceControllerLog(logStylers.genericError('Error updating device: '), logStylers.values(JSON.stringify(deviceIdToUpdate)), logStylers.values(error.message), error.stack);

                     return res.status(402)
                               .send(helpers.responseHelpers.updateFailure(contextName, error.message))
                 })
}

const deleteDevice = (req, res) => {
    const deviceIdToDelete = req.params.deviceId;

    const contextObject = {
        id: deviceIdToDelete,
    };

    const query = {
        where: contextObject,
    };

    return device.destroy(query)
                 .then(() => {
                     deviceControllerLog(logStylers.genericSuccess('Device successfully deleted! ID: '), logStylers.values(deviceIdToDelete));

                     return res.status(203)
                               .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'))
                 })
                 .catch((error) => {
                     deviceControllerLog(logStylers.genericError(`Error deleting device. ID: ${logStylers.values(deviceIdToDelete)} `), logStylers.values(error.message), error.stack);

                     return res.status(403)
                               .send(helpers.responseHelpers.deleteFailure(contextName, error.message))
                 });
}

export default {
    addDevice,
    getAllDevices,
    updateDevice,
    deleteDevice,
}
