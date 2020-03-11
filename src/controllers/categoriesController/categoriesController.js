import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';


const { category } = model;
const contextName = controllerConstants.category.CONTEXTNAME

const getAllCategories = (req, res) => {
    return category.findAll()
                   .then(allCategories =>
                       res.status(200)
                          .send(helpers.controllerHelpers.afterFetchSuccess(allCategories, contextName))
                   ).catch(error =>
                       res.status(400)
                          .send(helpers.responseHelpers.fetchFailure(contextName, error))
                   );
};


export default {
    getAllCategories,
};
