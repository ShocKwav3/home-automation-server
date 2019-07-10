// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../bin/www';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Devices API", () => {
  let deviceId = ''
  const newDeviceData = {
    name: 'TEST DEVICE FROM TEST',
    role: 'ACTUATOR',
    type: 'MOTOR',
    io_pin: 88,
    added_timestamp: '2019-04-23T20:44:29.597Z',
    min_value: 0,
    max_value: 1
  }

  const updatedDeviceData = {
    name: 'TEST DEVICE FROM TEST UPDATED',
    role: 'ACTUATOR',
    type: 'MOTOR',
    io_pin: 88,
    client_added_timestamp: '2019-04-23T20:44:29.597Z',
    min_value: 0,
    max_value: 1
  }

  describe("POST /api/v1/devices", () => {
    it("Should add a new device", (done) => {
      chai.request(app)
          .post('/api/v1/devices')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(newDeviceData)
          .end((err, res, body) =>{
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.data.should.be.a('object');
            deviceId = res.body.data.id
            done();
      });
    });
  });

  describe("GET /api/v1/devices", () => {
    it("Should get all devices", (done) => {
      console.log('GOT THE ID', deviceId)
      chai.request(app)
          .get('/api/v1/devices')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.be.a('array');
            done();
      });
    });
  });

  describe("PUT /api/v1/devices", () => {
    it("Should replace the device with new data", (done) => {
      chai.request(app)
          .put(`/api/v1/devices/${deviceId}`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(updatedDeviceData)
          .end((err, res, body) =>{
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.data.should.be.a('object');
            done();
      });
    });
  });

  describe("DELETE /api/v1/devices", () => {
    it("Should delete the device", (done) => {
      chai.request(app)
          .delete(`/api/v1/devices/${deviceId}`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(updatedDeviceData)
          .end((err, res, body) =>{
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
      });
    });
  });
});