<template>
<!-- <div class="col-md-3">
  <div class="list-group">
  <a href="#" class="list-group-item active" v-for="article in articles">
    {{ article.title }}
  </a>
</div>
</div> -->
<div class="col-md-3">
  <h2>List Articles</h2>
  <!-- <p>{{ articles }}</p> -->
    <router-link
    v-for="(article, index) in articles"
        :to="'/blog/' + article._id"
        class="list-group-item"
        :key="index">
        {{ article.title }}
        {{ article._id}}
    </router-link>
  </ul>
</div>
</template>

<script>
import ArticleDetails from '@/components/ArticleDetails'
export default {
  props: ['articles'],
  components: {
    ArticleDetails
  }
}
</script>
