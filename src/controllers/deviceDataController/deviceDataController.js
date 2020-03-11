import { Op } from 'sequelize';

import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';


const {
    device_data,
    device,
    category,
    role,
} = model;
const contextName = controllerConstants.deviceData.CONTEXTNAME;
const socketEventName = controllerConstants.deviceData.SOCKETEVENT;

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
                      .then(deviceDataSynced =>
                          res.status(201)
                             .send(helpers.controllerHelpers.afterCreateSuccess(deviceDataSynced, contextName, res.locals.cacheHandler, shouldFireSocketEvent, socketEventName))
                      ).catch(error =>
                          res.status(401)
                             .send(helpers.responseHelpers.addFailure(contextName, error))
                      );
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
                      .then(allDeviceData =>
                          res.status(200)
                             .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceData, contextName, res.locals.cacheHandler))
                      ).catch(error =>
                          res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error))
                      );
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
                      .then(allDeviceDataByRole =>
                          res.status(200)
                             .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceDataByRole, contextName, res.locals.cacheHandler))
                      ).catch(error =>
                          res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error))
                      );
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
                      .then(allDeviceDataByRole =>
                          res.status(200)
                             .send(helpers.controllerHelpers.afterFetchSuccess(allDeviceDataByRole, contextName, res.locals.cacheHandler))
                      ).catch(error =>
                          res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error))
                      );
}


export default {
  addDeviceData,
  getAllDeviceData,
  getDeviceDataByRole,
  getDeviceDataByCategory,
}
