var express = require('express');
var router = express.Router();

var Blog = require('../../models/blog');

// GET blog listing
router.get('/posts', (req, res) => {
    Blog.find({}, function(err, blogs) {
        if(err) {
            res.send(err);
        } else {
            res.status(200).json(blogs);
        }
    });
});

router.get('/post/:id', (req, res) =>{
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
            res.send(err);
        } else {
            res.status(200).json(blog);
        }   
    });
});

router.post('/post', (req, res) => {
    var post = new Blog({
     content: req.body.content,
     author: req.body.author,
     title: req.body.title
    });
        post.save(post, function(err, result){
            if(err){
                res.send(err)
            }
            res.status(201).json(result);
            
        });
    
});

module.exports = router;