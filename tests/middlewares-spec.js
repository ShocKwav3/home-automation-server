import { expect, assert } from 'chai';
import sinon from 'sinon'

import middlewares from '../src/middlewares'
import helpers from '../src/helpers'


describe('API cache GET request', () => {
  let cacheConnectionStub;
  const cacheClient = {
    get: (key, callback) => {
      console.log('SETTING KEY IN CACHE - FROM TEST ', key)
      callback(null, '{"response": "success"}')
    },
    on: (event, callback) => {
      console.log('CACHE CONNECTED FROM TEST ', event)
      callback()
    }
  }
  const req = {
    url: '/api/v1/devices',
    method: 'GET',
    app: {
      get: (value) => {
        console.log("APP GET CALLED FROM TEST ", value)
        return cacheClient
      }
    }
  }
  const res = {
    status: (statusCode) => {
      console.log("STATUS FROM TEST", statusCode)
      return {
        send: (response) => console.log("SENT FROM TEST", response)
      }
    },
    locals: {}
  }
  const spyCacheClintGet = sinon.spy(cacheClient, 'get')

  /*beforeEach(() => {
    cacheConnectionStub = sinon.stub(helpers.apiCacheHelpers, 'connect').returns(cacheClient);
  });*/

  it('Should invoke cache instance and set cache', () => {
    expect(middlewares.cacheMiddlewares.checkApiCache(req, res)).to.equal(undefined);
    //expect(cacheConnectionStub.calledOnce).to.equal(true);
    assert(spyCacheClintGet.calledOnce);
  });
});