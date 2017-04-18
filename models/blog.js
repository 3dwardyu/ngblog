var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema ({
    title: String,
    author: String,
    content: { type: String, required: true},
    comments: [{ body: String, date: Date }],
    created_at: { type: Date, default: Date.new },
    updated_at: Date,
    hidden: Boolean


});

blogSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

        next();
});

module.exports = mongoose.model('Blog', blogSchema);