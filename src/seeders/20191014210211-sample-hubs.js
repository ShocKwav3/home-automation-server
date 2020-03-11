'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('hubs', [{
      name: 'Living room',
      user_id: 1,
      added_timestamp: '2019-08-24T07:25:15.093Z',
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hubs', null, {});
  }
}