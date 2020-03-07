import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';


const { category } = model;
const contextName = controllerConstants.category.CONTEXTNAME

const getAllCategories = (req, res) => {
    const cacheClient = req.app.get('cacheClient');
    const cacheKey = res.locals.cacheKey;

    return category.findAll()
                   .then(allCategories =>
                       helpers.controllerHelpers.afterFetchSuccess(res, allCategories, contextName, cacheClient, cacheKey)
                   ).catch(error =>
                       res.status(400)
                          .send(helpers.responseHelpers.fetchFailure(contextName, error))
                   );
};


export default {
    getAllCategories,
};
