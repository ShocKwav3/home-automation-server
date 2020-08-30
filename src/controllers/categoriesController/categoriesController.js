import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { category } = model;
const contextName = controllerConstants.category.CONTEXTNAME;
const categoryControllerLog = controllerLog(contextName);

const getAllCategories = (req, res) => {
    return category.findAll()
                   .then(allCategories => {
                       categoryControllerLog(logStylers.genericSuccess('Categories fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allCategories)));

                       return res.status(200)
                                 .send(helpers.controllerHelpers.afterFetchSuccess(allCategories, contextName))
                   }).catch(error => {
                       categoryControllerLog(logStylers.genericError('Error fetching categories. Message: '), logStylers.values(error.message), '\n', error.stack);

                       return res.status(400)
                                 .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                   });
}


export default {
    getAllCategories,
}
