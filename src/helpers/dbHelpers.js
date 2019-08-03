import Sequelize from 'sequelize';


const connectDB = (config) => ({
  dbInstance: new Sequelize(config.database, config.username, config.password, config),
  dbLibImport: Sequelize,
});


export default {
  connectDB,
};