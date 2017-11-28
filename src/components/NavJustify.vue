<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">
          <div class="vertical-center">Home</div>
        </router-link>
      </li>
      <li>
        <router-link to="/blog">
          <div class="vertical-center">Blog</div>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="vertical-center">Community Chat</div>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="vertical-center">Twitter</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavJustify',
    props: ['data'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: justify;
    margin: 0 auto;
    padding: 0;
    max-width: 950px;
  }

  ul:after {
    content: "";
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 0;
  }

  li {
    transition: 0.5s;
    color: #FFFFFF;
    display: inline-block;
    height: 44px;
  }

  li:hover {
    color: #DDDEEE;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .nav {
    margin: 0 auto;
    padding: 0 10px;
    background-color: #42b983;
    font-size: 20px;
    height: 44px;
  }

  .vertical-center {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>
