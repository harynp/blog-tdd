<template>
<div class="col-md-9">
  <div class="jumbotron">
    <img :src= "article.imgUrl" class="img-responsive">
    <h1>{{ article.title }}</h1>
    <p> {{ article.content }} </p>
    <p> Author : {{ article.author }} </p>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  data: function () {
    return {
      article: {}
    }
  },
  methods: {
    getDetailArticle (id) {
      this.$http.get('/api/blog/' + id)
      .then(({data}) => {
        this.article = data
      })
      .catch((err) => console.log(err))
    }
  },
  mounted () {
    this.getDetailArticle(this.id)
  },
  watch: {
    id (newId) {
      this.getDetailArticle(this.id)
    }
  }
}
</script>

<style>
h1 {
font-weight:500px;
font-size:12px;
color:#fff;
text-shadow:
0 0 3px #FFFFA0,
0 0 5px #FFFF4D,
0 0 9px #FFFF41,
0 0 20px #FFFF2A,
0 0 20px #FFFF2B,
0 0 15px #FEFE00,
0 0 20px #F7F700;
}
  p {
    text-align: justify;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: monospace;
    color: white
  }
   img {
    display: block;
    margin: auto;
    width: 100%;
   }

  .jumbotron {
    background-color: black;
    border-style: solid;
  }
</style>
