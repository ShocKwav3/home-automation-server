'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'user one',
      email: 'email@domain.com',
      password: 'pass',
      added_timestamp: '2019-08-23T07:25:15.093Z',
    },
    {
      name: 'user two',
      email: 'anotheremail@domain.com',
      password: 'anotherpass',
      added_timestamp: '2019-08-25T09:25:15.093Z',
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
