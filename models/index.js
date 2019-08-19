
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = 'index.js';
const dbconfig = require('../config/dbconfig.json');
const db = {};

let sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {host : dbconfig.host, dialect : 'mysql'});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

/*
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
*/
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
