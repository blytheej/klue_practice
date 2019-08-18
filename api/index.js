const express = require('express');
const api = express();

const posts = require('./posts');
const auth = require('./auth');

api.use('/posts', posts);
api.use('/auth', auth);

// 라우터를 내보냅니다.
module.exports =  api;