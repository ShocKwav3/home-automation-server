'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      added_timestamp: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_timestamp: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hubs');
  }
};