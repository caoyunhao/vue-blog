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
  html, body {
    margin: 0;
    padding: 0;
    min-width: 320px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
