import helpers from '../helpers';


const checkApiCache = (req, res, next) => {
  const cacheClient = helpers.apiCacheHelpers.connect();
  const key = req.url;

  cacheClient.on('connect', ()=>{
    console.log('CONNECTED TO REDIS', key, typeof key);
  });

  res.locals.cacheClient = cacheClient;
  res.locals.cacheKey = key;

  if(req.method === 'GET'){
    cacheClient.get(key, (err, result) => {
      if (err == null && result != null) {
        console.log('FOUND IN CACHE\n\n', result);

        res.status(201).send(JSON.parse(result));
      } else {
        console.log('NOT FOUND IN CACHE');

        next();
      };
    });
  } else {
    next();
  };
};


export default {
  checkApiCache,
};