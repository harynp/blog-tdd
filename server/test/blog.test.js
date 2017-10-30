let mongoose = require("mongoose");
let Blog = require('../models/blog');

const chai = require('chai');
const should = chai.should()
const chaiHttp = require('chai-http');
const app = require('../app')

chai.use(chaiHttp)

describe('Blog', () => {
  beforeEach((done) => {
    Blog.remove({}, (err) => {
      done();
    });
  });
  describe('Bayar Parkir Pake Debit', function() {
    it('Jakarta sekarang sudah canggih dalam sistem parkir', function(done) {
      chai.request(app)
        .post('/api/blog')
        .send({
          title: 'Bayar tukang parkir pake debit',
          content: 'Selama ini banyak orang bayar tukang parkir pake receh, sekarang bisa melalui debit BCA dan Credit di alfamart',
          author: 'Unknown'
        })
        .end(function(err, response) {
          console.log(response.body);
          response.status.should.equal(200)
          response.body.should.be.an('object')
          response.body.should.have.property('_id')
          response.body.should.have.property('title')
          response.body.should.have.property('content')
          response.body.should.have.property('author')
          response.body.title.should.equal('Bayar tukang parkir pake debit')
          response.body.content.should.equal('Selama ini banyak orang bayar tukang parkir pake receh, sekarang bisa melalui debit BCA dan Credit di alfamart')
          response.body.author.should.equal('Unknown')
          done()
        })
    })
  })

  describe('Cari semua berita', function() {
    it('diambil dari database terpecaya', function(done) {
      chai.request(app)
        .get('/api/blog')
        .end(function(err, response) {
          console.log(response.body);
          response.status.should.equal(200)
          response.body.should.be.an('array')
          response.body.length.should.be.eql(0);
          done()
        })
    })
  })

  describe('Update Berita', () => {
    it('Berita sudah di perbarui', (done) => {
      let blog = new Blog({
        title: "Makan nasi padang pake kaki",
        content: "karena makan pake tangan sudah mainstream",
        author: 'Uda nasi padang'
      })
      blog.save((err, blog) => {
        chai.request(app)
          .put('/api/blog/' + blog.id)
          .send(blog)
          .end((err, response) => {
            console.log(response.body);
            response.should.have.status(200);
            response.body.should.be.an('object')
            done();
          });
      });
    });
  });

  describe('Berita sudah dihapus', function() {
    it('Delete berita', function(done) {
      let blog = new Blog({
        title: 'Tidur sambil melek',
        content: 'Berita akan di hapus',
        author: 'Dimas mangap'
      })
      blog.save((err, blog) => {
        chai.request(app)
          .delete(`/api/blog/${blog._id}`)
          .end((err, response) => {
            response.status.should.be.equal(200)
            response.should.be.an('object')
            response.body.should.have.property('_id')
            response.body.should.have.property('title')
            response.body.should.have.property('content')
            response.body.should.have.property('author')
            response.body.title.should.equal('Tidur sambil melek')
            response.body.content.should.equal('Berita akan di hapus')
            response.body.author.should.equal('Dimas mangap')
            done()
          })
      })
    })
  })
})
