import models from '../src/models';


function initializeModels (context){
  Object.keys(models).forEach(modelName => {
    Object.defineProperty(context, [modelName], {
      configurable: false,
      enumerable: true,
      value: models[modelName],
    });
  });
};


export default {
  initializeModels,
};