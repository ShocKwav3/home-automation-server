'use strict';

//const fs = require('fs');
import fs from 'fs'
//const path = require('path');
import path from 'path'
//const Sequelize = require('sequelize');
import Sequelize from 'sequelize'
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

import dbconfig from '../config/configdb'
const config = dbconfig[env];
let db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

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
db.Sequelize = Sequelize;

//module.exports = db;

export default db
