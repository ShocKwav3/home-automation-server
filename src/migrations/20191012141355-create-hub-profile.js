'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hub_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      settings: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('hub_profiles');
  }
}
