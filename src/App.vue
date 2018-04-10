<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import api from '@/api'

  export default {
    name: 'App',
    components: {Navbar}
  }
</script>

<style lang="scss">
  @import "styles/main";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }


</style>
