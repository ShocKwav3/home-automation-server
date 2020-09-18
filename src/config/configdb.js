module.exports = {
    development: {
        username: '',
        password: '',
        database: '',
        host: '',
        dialect: '',
        logging: msg => require('debug')('HA:database')(msg),
    },
    test: {
        username: '',
        password: '',
        database: '',
        host: '',
        dialect: '',
        logging: msg => require('debug')('HA:database')(msg),
    },
    production: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: msg => require('debug')('HA:database')(msg),
    }
}

//linux
// sudo ntfsfix /dev/sda5

//mac
//when pg wont let you connect
// sudo rm /usr/local/var/postgres/postmaster.pid
// brew services restart postgresql

// brew services start postgresql
// brew services stop postgresql
// sudo chown -R $(whoami) /usr/local
