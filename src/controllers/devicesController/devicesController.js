import model from 'src/models';
import helpers from 'src/helpers';
import constants from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const {
    device,
    category,
    role,
    hub,
    user,
} = model;
const contextName = constants.controllerConstants.device.CONTEXTNAME;
const deviceControllerLog = controllerLog(contextName);

const addDevice = (req, res) => {
    const deviceData = {
        name: req.body.name,
        hub_id: req.body.hub_id,
        category_id: req.body.category_id,
        io_pin: req.body.io_pin,
        added_timestamp: req.body.added_timestamp,
        min_value: req.body.min_value,
        max_value: req.body.max_value,
    };

    return device.create(deviceData)
        .then((deviceDataSynced) => {
            deviceControllerLog(logStylers.genericSuccess('Device created successfully. Values:\n'), logStylers.values(JSON.stringify(deviceDataSynced)));

            return res.status(201)
                .send(helpers.controllerHelpers.afterCreateSuccess(deviceDataSynced, contextName, res.locals.cacheHandler));
        }).catch((error) => {
            deviceControllerLog(logStylers.genericError('Error creating device. Message: '), logStylers.values(error.message), '\n', error.stack);

            return res.status(401)
                .send(helpers.responseHelpers.addFailure(contextName, error.message));
        });
};

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
        .then((allDevices) => {
            deviceControllerLog(logStylers.genericSuccess('Devices fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDevices)));

            return res.status(200)
                .send(helpers.controllerHelpers.afterFetchSuccess(allDevices, contextName, res.locals.cacheHandler));
        }).catch((error) => {
            deviceControllerLog(logStylers.genericError('Error fetching devices: '), logStylers.values(error.message), '\n', error.stack);

            return res.status(400)
                .send(helpers.responseHelpers.fetchFailure(contextName, error.message));
        });
};

const updateDevice = (req, res) => {
    const deviceIdToUpdate = req.params.deviceId;
    const requestedChanges = {
        ...req.body,
        updated_timestamp: new Date().toISOString(),
    };
    const query = {
        fields: Object.keys(requestedChanges),
        returning: true,
        where: {
            id: deviceIdToUpdate,
        },
    };

    return device.update(requestedChanges, query)
        .then((deviceDataUpdateInformation) => {
            const [numberOfRowsAffected, updatedDeviceData] = deviceDataUpdateInformation;

            // NOTE: Since this is allowed to update only a single device through the route, the updated device data will always contain a single changed row thus we are using updatedDeviceData[0];
            deviceControllerLog(
                `${logStylers.genericSuccess('Device successfully updated!')} Affected rows: ${numberOfRowsAffected}`,
                `Incoming: ${logStylers.values(JSON.stringify(req.body))}`,
                `After change: ${logStylers.values(JSON.stringify(updatedDeviceData[0]))}`
            );

            return res.status(202)
                .send(helpers.controllerHelpers.afterUpdateSuccess(updatedDeviceData[0], contextName, res.locals.cacheHandler, 'update'));
        }).catch((error) => {
            deviceControllerLog(logStylers.genericError('Error updating device: '), logStylers.values(JSON.stringify(deviceIdToUpdate)), logStylers.values(error.message), error.stack);

            return res.status(402)
                .send(helpers.responseHelpers.updateFailure(contextName, error.message));
        });
};

const deleteDevice = (req, res) => {
    const deviceIdToDelete = req.params.deviceId;
    const query = {
        where: {
            id: deviceIdToDelete,
        },
    };

    return device.destroy(query)
        .then(() => {
            deviceControllerLog(logStylers.genericSuccess('Device successfully deleted! ID: '), logStylers.values(deviceIdToDelete));

            return res.status(203)
                .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'));
        })
        .catch((error) => {
            deviceControllerLog(logStylers.genericError(`Error deleting device. ID: ${logStylers.values(deviceIdToDelete)} `), logStylers.values(error.message), error.stack);

            return res.status(403)
                .send(helpers.responseHelpers.deleteFailure(contextName, error.message));
        });
};

export default {
    addDevice,
    getAllDevices,
    updateDevice,
    deleteDevice,
};
