'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('devices', [{
      name: 'Cactus Pump',
      hub_id: 1,
      category_id: 1,
      io_pin: 2,
      added_timestamp: '2019-10-05T09:25:15.093Z',
      min_value: 0,
      max_value: 1,
    },
    {
      name: 'Moisture Sensor',
      hub_id: 1,
      category_id: 2,
      io_pin: 4,
      added_timestamp: '2019-10-05T09:48:15.093Z',
      min_value: 0,
      max_value: 1000,
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('devices', null, {});
  }
}
