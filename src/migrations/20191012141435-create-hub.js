/* eslint-disable no-unused-vars */


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
            board_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'boards',
                    key: 'id',
                },
            },
            hub_profile_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'hub_profiles',
                    key: 'id',
                },
            },
            hub_profile_settings: {
                allowNull: false,
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('hubs');
    },
};
