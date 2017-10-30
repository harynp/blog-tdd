const mongoose = require('mongoose');

mongoose.connection.openUri('mongodb://localhost/blog_'+process.env.NODE_ENV, (err)=>{
    if(err) console.log('database unconnected');
    else console.log('database connected');
})

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    content: String,
    author: String
})
const Blogs = mongoose.model('Blogs', blogSchema)

module.exports = Blogs
