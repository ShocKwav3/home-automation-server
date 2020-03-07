import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';

const { role } = model;
const contextName = controllerConstants.role.CONTEXTNAME


const getAllRoles = (req, res) => {
    const cacheClient = req.app.get('cacheClient');
    const cacheKey = res.locals.cacheKey;

    return role.findAll()
                .then(allRoles =>
                    helpers.controllerHelpers.afterFetchSuccess(res, allRoles, contextName, cacheClient, cacheKey)
                ).catch(error =>
                    res.status(400)
                    .send(helpers.responseHelpers.fetchFailure(contextName, error))
                );
};


export default {
    getAllRoles,
};