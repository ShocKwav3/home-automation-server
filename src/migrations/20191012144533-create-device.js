'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devices', {
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
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      hub_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'hubs',
          key: 'id',
        },
      },
      io_pin: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      added_timestamp: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_timestamp: {
        allowNull: true,
        type: Sequelize.DATE
      },
      min_value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      max_value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('devices');
  }
};