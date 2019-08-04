'use strict';

import fs from 'fs'
import path from 'path'

import dbconfig from 'projectRoot/src/config/configdb'
import helpers from 'projectRoot/src/helpers'
// && cp ./src/config/configdb.json ./dist/config/
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = dbconfig[env];
let db = {};
console.log("CHECKOUT THIS", env, Object.keys(config))
const sequelizeObj = helpers.dbHelpers.connectDB(config);
const sequelize = sequelizeObj.dbInstance

fs
  .readdirSync(__dirname + '/../models/')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, '/../models/', file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = sequelizeObj.dbLibImport;


export default db