module.exports = {
  development: {
    username: 'postgres',
    password: 'object73Fi',
    database: 'home_automation_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'object73Fi',
    database: 'home_automation_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}
