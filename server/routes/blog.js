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

router.get('/posts/:id', (req, res) =>{
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
            res.send(err);
        } else {
            res.status(200).json(blog);
        }   
    });
})

module.exports = router;