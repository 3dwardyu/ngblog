var express = require('express');
var router = express.Router();

var Blog = require('../../models/blog');

var testBlog = new Blog({
    title: 'Test',
    author: 'Edward',
    content: 'This is a test blog post',
    hidden: false
});

testBlog.save(function(err){
    if (err) throw err;

    console.log('User created!');
});


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

module.exports = router;