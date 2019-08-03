'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sensor_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_timestamp: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sensor_device_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'devices',
          key: 'id',
          as: 'sensor_device_id'
        }
      },
      sensor_value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sensor_data');
  }
};