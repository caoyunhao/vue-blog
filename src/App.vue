<template>
  <div id="app">
    <NavJustify></NavJustify>
    <router-view/>
  </div>
</template>

<script>
  import NavJustify from '@/components/NavJustify'

  export default {
    name: 'app',
    components: {
      NavJustify
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
