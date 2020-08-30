import { Op } from 'sequelize';

import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const {
    device_data,
    device,
    category,
    role,
} = model;
const contextName = controllerConstants.deviceData.CONTEXTNAME;
const socketEventName = controllerConstants.deviceData.SOCKETEVENT;
const deviceDataControllerLog = controllerLog(contextName);

const addDeviceData = (req, res) => {
    const {
        created_timestamp,
        device_id,
        device_value,
        initiator_id,
        initiator_role_id,
    } = req.body;

    const deviceData = {
        created_timestamp,
        device_id,
        device_value,
        initiator_id,
        initiator_role_id,
    };

    const shouldFireSocketEvent = true;

    return device_data.create(deviceData)
                      .then(deviceDataSynced => {
                          deviceDataControllerLog(logStylers.genericSuccess('Device data created successfully. Values:\n'), logStylers.values(JSON.stringify(deviceDataSynced)));

                          return res.status(201)
                                    .send(helpers.controllerHelpers.afterCreateSuccess(deviceDataSynced, contextName, res.locals.cacheHandler, shouldFireSocketEvent, socketEventName))
                      }).catch(error => {
                          deviceDataControllerLog(logStylers.genericError('Error creating device data: '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(401)
                                    .send(helpers.responseHelpers.addFailure(contextName, error.message))
                      });
}

const getAllDeviceData = (req, res) => {
    const query = {
        include: [{
            model: device,
            attributes: ['id'],
            include: [{
                model: category,
                attributes: ['id'],
                include: [{
                    model: role,
                    attributes: ['id'],
                    required: true,
                }],
                required: true,
            }],
            required: true,
        }],
    };

    return device_data.findAll(query)
                      .then(allDeviceData => {
                          deviceDataControllerLog(logStylers.genericSuccess('Device data fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDeviceData)));

                          return res.status(200)
                                    .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceData, contextName, res.locals.cacheHandler))
                      }).catch(error => {
                          deviceDataControllerLog(logStylers.genericError('Error updating device data: '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(400)
                                    .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                      });
}

const getDeviceDataByRole = (req, res) => {
    const roleId = req.params.roleId;
    const query = {
        include: [{
            model: device,
            attributes: ['id'],
            include: [{
                model: category,
                attributes: ['id'],
                include: [{
                    model: role,
                    attributes: ['id'],
                    where: {
                        id: {
                            [Op.eq]: roleId,
                        },
                    },
                    required: true,
                }],
                required: true,
            }],
            required: true,
        }],
    };

    return device_data.findAll(query)
                      .then(allDeviceDataByRole => {
                          deviceDataControllerLog(logStylers.genericSuccess('Device data(by role) fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDeviceDataByRole)));

                          return res.status(200)
                                    .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceDataByRole, contextName, res.locals.cacheHandler))
                      }).catch(error => {
                          deviceDataControllerLog(logStylers.genericError('Error fetching device data(by role): '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(400)
                                    .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                      });
}

const getDeviceDataByCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    const query = {
        include: [{
            model: device,
            attributes: ['id'],
            include: [{
                model: category,
                attributes: ['id'],
                where: {
                    id: {
                        [Op.eq]: categoryId,
                    },
                },
                include: [{
                    model: role,
                    attributes: ['id'],
                    required: true,
                }],
                required: true,
            }],
            required: true,
        }],
    };

    return device_data.findAll(query)
                      .then(allDeviceDataByCategory => {
                          deviceDataControllerLog(logStylers.genericSuccess('Device data(by category) fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDeviceDataByCategory)));

                          return res.status(200)
                                    .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceDataByCategory, contextName, res.locals.cacheHandler))
                      }).catch(error => {
                          deviceDataControllerLog(logStylers.genericError('Error fetching device data(by category): '), logStylers.values(error.message), '\n', error.stack);

                          return res.status(400)
                                    .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                      });
}


export default {
  addDeviceData,
  getAllDeviceData,
  getDeviceDataByRole,
  getDeviceDataByCategory,
}
