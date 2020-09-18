'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('boards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      board_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      board_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      board_user_token: {
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
    return queryInterface.dropTable('boards');
  }
}
