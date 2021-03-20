/* eslint-disable no-unused-vars */


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tokens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            owner_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            owner_type: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            token: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            expiry_timestamp: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            added_timestamp: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            updated_timestamp: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tokens');
    },
};
