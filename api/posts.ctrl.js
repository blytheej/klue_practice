const models = require('../models/index');
const seq = require('sequelize');
const Joi = require('Joi');
const sanitizeHtml = require('sanitize-html');

const sanitizeOption = {
    allowedTags: [
        'h1',
        'h2',
        'b',
        'i',
        'u',
        's',
        'p',
        'ul',
        'ol',
        'li',
        'blockquote',
        'a',
        'img',
    ],
    allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src'],
        li: ['class'],
    },
    allowedSchemes: ['data', 'http'],
};

export const getPostById = (req, res, next) => {
  const id = req.params.id;

  const post = models.Post.find({
      where : {
          _id : id
      }
  }).then( (post) => {
      if(!post){
          res.status(404);
      }
      res.json(post);
      return next();
  }).catch((err)=> {
      console.log(err);
  });
};

export const checkOwnPost = (req, res, next) => {
    /*
    if(post.user._id !== user._id){
        res.status(403);
        return;
    }
    */
    return next();
};
/*
export const list = (req, res) => {
    console.log(models.Post);
    const post = {
        title : 'titles',
        body : 'contentssssssss',
        tags : '["tag1"]',
        user : 1
    };
    models.Post.create(post).then(posts => res.send(posts));
};

*/
///*
export const list = (req, res) => {
    const page = parseInt(req.query.page || '1', 10);

    if(page<1){
        res.status(400);
        return;
    }

    let tag = req.query.tag;
    let username = req.query.username;

    if(!tag){ tag = {}}
    if(!username){ username = {}}

    models.Post.findAll({

    }).then( posts => {
        if(!posts){
            posts = {
        title : 'extitles',
        body : 'excontentssssssss',
        tags : 'extag1',
        user : 0
    };
        }
        posts.forEach( post=>{
        });
        res.send(posts);
    }).catch( err =>{
        console.log(err);
    });
};
//*/