<template>

  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Writes ~ Blog</a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  border-radius: 0;
}
</style>
