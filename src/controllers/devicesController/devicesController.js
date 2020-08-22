import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import  { printLog, logStylers } from 'src/helpers/logHelpers';


const {
    device,
    category,
    role,
    hub,
    user,
} = model;
const contextName = controllerConstants.device.CONTEXTNAME;

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
                .then(deviceDataSynced =>
                    res.status(201)
                       .send(helpers.controllerHelpers.afterCreateSuccess(deviceDataSynced, contextName, res.locals.cacheHandler))
                ).catch(error =>
                    res.status(401)
                       .send(helpers.responseHelpers.addFailure(contextName, error))
                );
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
                 .then(allDevices =>
                    res.status(200)
                       .send(helpers.controllerHelpers.afterFetchSuccess(allDevices, contextName, res.locals.cacheHandler))
                 ).catch(error =>
                     res.status(400)
                        .send(helpers.responseHelpers.fetchFailure(contextName, error))
                 );
}

const updateDevice = (req, res) => {
    const deviceIdToUpdate = req.params.deviceId;

    req.body.updated_timestamp = new Date().toISOString();

    return device.findByPk(deviceIdToUpdate)
                 .then(targetDevice =>
                     targetDevice.update(req.body, { fields: Object.keys(req.body) })
                                 .then(deviceDataUpdated =>{
                                     printLog(`${logStylers.genericSuccess('Device successfully updated! ')}, Old: ${logStylers.values(JSON.stringify(targetDevice))} New: ${logStylers.values(JSON.stringify(deviceDataUpdated))}`);

                                     res.status(202)
                                        .send(helpers.controllerHelpers.afterUpdateSuccess(deviceDataUpdated, contextName, res.locals.cacheHandler, 'update'))
                                 }).catch(error => {
                                     printLog(logStylers.genericError('Error updating device: '), logStylers.values(JSON.stringify(targetDevice)), error);

                                     res.status(402)
                                        .send(helpers.responseHelpers.updateFailure(contextName, error))
                                 })
                 ).catch(error =>
                    res.status(402)
                       .send(helpers.responseHelpers.updateFailure(contextName, error))
                 );
}

const deleteDevice = (req, res) => {
    const deviceIdToDelete = req.params.deviceId;

    return device.findByPk(deviceIdToDelete)
                 .then(targetDevice =>
                     targetDevice.destroy()
                                 .then(() => {
                                     printLog(logStylers.genericSuccess('Device successfully deleted! '), logStylers.values(JSON.stringify(targetDevice)));

                                     res.status(203)
                                        .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'))
                                 }).catch(error => {
                                     printLog(logStylers.genericError('Error deleting device: '), logStylers.values(JSON.stringify(targetDevice)), error);

                                     res.status(403)
                                        .send(helpers.responseHelpers.deleteFailure(contextName, error))
                                 })
                 ).catch(error =>
                     res.status(403)
                        .send(helpers.responseHelpers.deleteFailure(contextName, error))
                 );
}

export default {
    addDevice,
    getAllDevices,
    updateDevice,
    deleteDevice,
}
