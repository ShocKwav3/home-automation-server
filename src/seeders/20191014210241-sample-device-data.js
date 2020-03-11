'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('device_data', [{
      created_timestamp: '2019-08-12T12:28:36.194Z',
      device_value: 0,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-12T12:28:24.194Z',
      device_value: 1,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-10T12:26:23.194Z',
      device_value: 0,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-10T12:26:10.194Z',
      device_value: 1,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-09T12:27:45.194Z',
      device_value: 0,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-09T12:27:32.194Z',
      device_value: 1,
      device_id: 1,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-12T13:28:40.194Z',
      device_value: 520,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-12T12:28:24.194Z',
      device_value: 197,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-12T11:28:24.194Z',
      device_value: 230,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-10T14:27:33.194Z',
      device_value: 450,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-10T12:26:19.194Z',
      device_value: 198,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-10T10:27:32.194Z',
      device_value: 250,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-09T13:27:32.194Z',
      device_value: 500,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-09T12:27:32.194Z',
      device_value: 199,
      device_id: 2,
      initiator_id: 2,
    },
    {
      created_timestamp: '2019-08-09T10:27:32.194Z',
      device_value: 220,
      device_id: 2,
      initiator_id: 2,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('device_data', null, {});
  }
}
