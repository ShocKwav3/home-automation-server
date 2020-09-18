import helpers from 'src/helpers';
import { cacheLog, logStylers } from 'src/helpers/logHelpers';


const checkApiCache = (req, res, next) => {
    if(!req.url.includes('/users')) {
        const cacheClient = req.app.get('cacheClient')
        const key = req.url;

        res.locals.cacheKey = key;

        if(req.method === 'GET'){
            cacheClient.get(key, (err, result) => {
                if (err == null && result != null) {
                    cacheLog(logStylers.genericSuccess('FOUND IN CACHE'), `for key: ${logStylers.values(key)}\n`, logStylers.values(result));

                    res.status(200).send(helpers.responseHelpers.fetchSuccess(undefined, JSON.parse(result)));
                } else {
                    cacheLog(logStylers.genericFailure('NOT FOUND IN CACHE'), 'for key: ', logStylers.values(key));

                    next();
                };
            });
        } else {
            next();
        };
    } else {
        next();
    }
};

const prepareCacheHandler = (paramToConsider=undefined) => async (req, res, next) => {
    const { cacheClient, cacheKeys } = await helpers.apiCacheHelpers.getCacheClientAndKeys(req, res, req.params[paramToConsider]);
    const cacheHandler = helpers.apiCacheHelpers.handleCache(cacheClient, cacheKeys);

    try {
        res.locals.cacheHandler = cacheHandler;
        next();
    } catch (error) {
        next(error);
    };
};


export default {
  checkApiCache,
  prepareCacheHandler,
};
