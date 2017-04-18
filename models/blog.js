var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema ({
    title: String,
    author: String,
    content: { type: String, required: true},
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.new },
    hidden: Boolean,

});

module.exports = mongoose.model('Blog', schema);