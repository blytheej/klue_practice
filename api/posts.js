const express = require('express');
const posts = express();
import * as postsCtrl from './posts.ctrl';
//const checkLoggedIn = require('../../lib/checkLoggedIn');

posts.get('/', postsCtrl.list);
/*
posts.post('/', postsCtrl.write);

posts.get('/:id',postsCtrl.getPostById, postsCtrl.read);
posts.delete('/:id',postsCtrl.getPostById, postsCtrl.checkOwnPost, oistsCtrl.remove);
posts.patch('/:id',postsCtrl.getPostById, postsCtrl.checkOwnPost, postsCtrl.update);
*/
// 라우터를 내보냅니다.
module.exports =   posts;