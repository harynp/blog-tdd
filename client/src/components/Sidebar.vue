<template>
<!-- <div class="col-md-3">
  <div class="list-group">
  <a href="#" class="list-group-item active" v-for="article in articles">
    {{ article.title }}
  </a>
</div>
</div> -->
<div class="col-md-3">
<h2>Menu</h2>
<div class="w3-sidebar w3-bar-block " style="width:100%" v-for="article in articles">
  <a href="#" class="w3-bar-item w3-button"> {{ article.title }} </a>
</div>
</div>
</template>

<script>
export default {
  props: ['articles'],
  components: {

  }
}
</script>
