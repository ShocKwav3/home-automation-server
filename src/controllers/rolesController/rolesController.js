import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';

const { role } = model;
const contextName = controllerConstants.role.CONTEXTNAME;


const getAllRoles = (req, res) => {
    return role.findAll()
               .then(allRoles =>
                   res.status(200)
                      .send(helpers.controllerHelpers.afterFetchSuccess(allRoles, contextName))
               ).catch(error =>
                   res.status(400)
                      .send(helpers.responseHelpers.fetchFailure(contextName, error))
               );
}


export default {
    getAllRoles,
}
