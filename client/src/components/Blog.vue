<template>
  <div id="app">
    <!-- <navbar></navbar> -->
    <sidebar v-bind:articles="articles"></sidebar>
    <ArticleSummary v-bind:articles="articles"></ArticleSummary>
    <!-- <Footer></Footer> -->
    <router-view/>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import ArticleSummary from '@/components/ArticleSummary'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    // Navbar
    Sidebar,
    ArticleSummary,
    Footer
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/api/blog')
        .then(({data}) => {
          console.log(data)
          this.articles = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
