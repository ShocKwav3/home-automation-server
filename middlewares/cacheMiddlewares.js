const checkApiCache = (req, res, next) => {
  const cacheClient = req.app.get('cacheClient')
  const key = req.url;

  cacheClient.on('connect', ()=>{
    console.log('CONNECTED TO REDIS');
  });

  res.locals.cacheKey = key;

  if(req.method === 'GET'){
    cacheClient.get(key, (err, result) => {
      if (err == null && result != null) {
        console.log('FOUND IN CACHE\n\n', result);

        res.status(200).send(JSON.parse(result));
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