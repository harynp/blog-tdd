const Blog = require('../models/blog')

class BLOG {
    static createArticle(req, res){
        let blog = new Blog(req.body)
        blog.save()
            .then(newArticle=>{
                res.status(200).send(newArticle)
            })
            .catch(err=>{
                res.status(400).send(err)
            })
    }

    static readArticle(req, res){
        Blog.find()
            .then(getArticle=>{
                res.status(200).send(getArticle)
            })
            .catch(err=>{
                res.status(404).send(err)
            })
    }

    static getArticleById(req, res){
          Blog.findById(req.params.id)
          .then(getArticle=>{
              res.status(200).send(getArticle)
          })
          .catch(err=>{
              res.status(404).send(err)
          })
      }

    static updateArticle(req, res){
        Blog.findByIdAndUpdate(req.params.id, {
            $set:{
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                imgUrl: req.body.imgUrl
            }
        },{new: true})
        .then(updArticle=>{
            res.status(200).send({updArticle, message:'Updated Blog Berhasil!'})
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    }

    static deleteArticle(req, res) {
        Blog.findByIdAndRemove(req.params.id)
            .then(delArticle => {
                res.status(200).send(delArticle)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = BLOG;
