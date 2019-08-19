const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

const dbAccount = require('./config/dbconfig');
const api = require('./api/index');

//import db
const models = require('./models/index.js');

models.sequelize.sync().then( () => {
    console.log('db connected');
}).catch(err=>{
    console.log('db connect failed');
    console.log(err);

});

app.use(bodyParser());

app.use('/api', api);

app.use(express.static(path.resolve(__dirname, 'front_build')));


app.listen(4000, () => {
    console.log('Listening to port 4000 or teemo is cute');
});

