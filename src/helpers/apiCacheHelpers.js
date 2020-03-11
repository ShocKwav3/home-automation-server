import { promisify } from 'util';
import redis from 'redis';
import _ from 'lodash';

import utils from './utils';


const connect = (host='127.0.0.1', port=6379) => (
  redis.createClient(port, host)
)

const getCacheClientAndKeys = async (req, res, cacheKeyPostFix, postFixOperation='remove') => {
    const cacheClient = req.app.get('cacheClient');
    const cacheKeyPrefix = cacheKeyPostFix ? utils.constructString(postFixOperation, 'end', `/${cacheKeyPostFix}`, res.locals.cacheKey) : res.locals.cacheKey;
    const allCacheKeys = await (promisify(cacheClient.keys).bind(cacheClient))('*');
    let cacheKeys = allCacheKeys.filter(key => key.startsWith(cacheKeyPrefix));

    if(_.isEmpty(cacheKeys)) {
        cacheKeys = [cacheKeyPrefix];
    };

    console.log("BLALALALALALAL", allCacheKeys, cacheKeys, cacheKeyPrefix, res.locals.cacheKey);
    
    return {
        cacheClient,
        cacheKeys,
    };
};

const handleCache = (cacheClient, cacheKeys) => (operation='set', data) => {
    console.log("AAAND HANDLING", cacheKeys, operation);

    if(!cacheClient) {
        return;
    };

    _.forEach(cacheKeys, (cacheKey) => {
        if(operation==='set' && !_.isEmpty(data)) {
            cacheClient.set(cacheKey, JSON.stringify(data));
        } else {
            cacheClient.del(cacheKey);
        };
    });
};


export default {
  connect,
  handleCache,
  getCacheClientAndKeys,
};
