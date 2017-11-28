<template>
  <div id="BlogList">
    <ol>
      <li v-for="blog in blogList" class="blog">
        <div class="title">
          <router-link to="/hello">{{ blog.title }}</router-link>
        </div>
        <div class="content">{{ blog.content }}</div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'BlogList',
    data () {
      return {
        blogList: [
          {
            title: 'First Article',
            content: 'First Article Content'
          },
          {
            title: 'Second Article',
            content: 'Second Article Content'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .blog {
    padding: 10px;
    border-bottom: solid 1px #609cd6;
  }

  a, .title {
    text-align: left;
    font-size: 25px;
    /*cursor: pointer;*/
  }

  .content {
    text-align: left;
    font-size: 15px;
  }
</style>
