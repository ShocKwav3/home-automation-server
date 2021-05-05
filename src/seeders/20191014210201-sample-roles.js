/* eslint-disable no-unused-vars */


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [
            {
                name: 'Actuator',
            },
            {
                name: 'Sensor',
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('roles', null, {});
    },
};
