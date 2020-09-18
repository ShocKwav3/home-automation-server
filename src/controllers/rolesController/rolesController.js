import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';

const { role } = model;
const contextName = controllerConstants.role.CONTEXTNAME;
const roleControllerLog = controllerLog(contextName);


const getAllRoles = (req, res) => {
    return role.findAll()
               .then(allRoles => {
                   roleControllerLog(logStylers.genericSuccess('Roles fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allRoles)));

                   return res.status(200)
                             .send(helpers.controllerHelpers.afterFetchSuccess(allRoles, contextName));
               }).catch(error => {
                   roleControllerLog(logStylers.genericError('Error fetching roles. Message: '), logStylers.values(error.message), '\n', error.stack);

                   return res.status(400)
                             .send(helpers.responseHelpers.fetchFailure(contextName, error.message));
               });
}


export default {
    getAllRoles,
}
