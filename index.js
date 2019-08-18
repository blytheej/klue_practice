const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


const api = require('./api/index');

app.use(bodyParser());

app.use('/api', api);

app.use(express.static(path.resolve(__dirname, 'front_build')));


app.listen(4000, () => {
    console.log('Listening to port 4000 or teemo is cute');
});