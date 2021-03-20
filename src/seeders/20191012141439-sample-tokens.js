/* eslint-disable no-unused-vars */


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tokens', [
            {
                owner_id: 1,
                owner_type: 'USER',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGRvbWFpbi5jb20iLCJpYXQiOjE1OTMzNjkwNTIsImV4cCI6MTU5MzM3MjY1Mn0.eODrwAgllPj3YIeya-h3gvBK0yIH-mfrBUjRc6cnzFQ',
                expiry_timestamp: '2020-06-28T19:30:52.010Z',
                added_timestamp: '2020-06-28T18:30:52.011Z',
                updated_timestamp: null,
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tokens', null, {});
    },
};
