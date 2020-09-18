'use strict';


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('hub_profiles', [
            {
                name: 'profileOne',
                settings: 'settingsINJsonHere',
                added_timestamp: '2020-06-28T18:30:52.011Z',
                updated_timestamp: null
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('hub_profiles', null, {});
    }
}
