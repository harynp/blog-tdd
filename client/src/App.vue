<template>
  <div id="app">
    <navbar></navbar>
    <!-- <sidebar></sidebar>
    <container></container> -->
    <!-- <Footer></Footer> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import Sidebar from '@/components/Sidebar'
// import Container from '@/components/Container'
// import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Navbar
    // Sidebar,
    // Footer
    // Container,
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
