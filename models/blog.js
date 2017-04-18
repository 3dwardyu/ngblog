var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema ({
    title: String,
    author: String,
    content: { type: String, required: true},
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.new },
    hidden: Boolean,
    created_at: Date,
    updated_at: Date

});

blogSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

        next();
});

module.exports = mongoose.model('Blog', blogSchema);