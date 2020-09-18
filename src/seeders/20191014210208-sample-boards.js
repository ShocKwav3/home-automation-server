'use strict';


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('boards', [
            {
                board_id: 'board1',
                board_name: 'photon_one',
                board_user_token: 'boardTokenLalala',
                added_timestamp: '2020-06-28T18:30:52.011Z',
                updated_timestamp: null
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('boards', null, {});
    }
}
