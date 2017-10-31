import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import ArticleDetails from '@/components/ArticleDetails'
import ArticleSummary from '@/components/ArticleSummary'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Home
  },
  {
    path: '/blog/',
    // name: 'Blog',
    component: Blog,
    children: [{
      path: '',
      component: ArticleSummary
    }, {
      path: ':id',
      component: ArticleDetails,
      props: true
    }]
  }]
})
