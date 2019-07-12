import { expect, assert } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import SequelizeMock from 'sequelize-mock';

const proxyquireStrict = proxyquire.noCallThru()
const deviceControllerPath = '../controllers/devicesController/devicesController.js'


const getDevices = () => {
  let connectDBMock = new SequelizeMock();
  let deviceMock = connectDBMock.define('device',{
    "id": 1,
    "name": "HUMIDITY DEVICE 1 FROM TEST",
    "role": "SENSOR",
    "type": "SOIL MOISTURE",
    "io_pin": 5,
    "added_timestamp": "2019-04-23T20:44:29.597Z",
    "updated_timestamp": null,
    "min_value": 0,
    "max_value": 1000
  })
  return deviceMock
}

var mockDevices = getDevices()

const controllersWired = proxyquireStrict(deviceControllerPath, {'../../models': {device: mockDevices}})
const deviceControllerGET = controllersWired.default.getAllDevices

describe('Device Controller', () => {
  const req = {
    app: {
      get: (string) => {
        console.log("GET CACHECLIENT FROM TEST", string)
        return {
          set: (cacheKey, data) => console.log('CACHING DATA - FROM TEST', cacheKey, data)
        }
      }
    }
  }
  const res = {
    locals: {
      cacheKey: 'devicesCACHEKEY'
    },
  }
  res.status = (statusCode) => {
    console.log("STATUS FROM TEST", statusCode)
    return sendRes
  }
  const sendRes = {
    send: (response) => {
      console.log("SENT FROM TEST", response)
    }
  }
  const devicesModelSpy = sinon.spy(mockDevices, 'findAll')

  it('Should call findAll method', () => {
    expect(deviceControllerGET(req, res)).to.equal(undefined);
    assert(devicesModelSpy.calledOnce);
  });
});