<template>
  <div class="blog-edit">
    <div class="edit-area">
      <form>
        <div class="blog-id">
          <input type="text" :value="blog.id"/>
        </div>
        <div class="title">
          <input type="text" :value="blog.title"/>
        </div>
        <div class="content">
          <textarea ref="content" :value="blog.content" @keyup="flush()" wrap="virtual"></textarea>
        </div>
        <div class="submit">
          <input type="submit" value="Submit"/>
        </div>

      </form>
    </div>
    <div class="show-area">
      <div ref="result">

      </div>
    </div>
  </div>
</template>

<script>
  import showdown from './../../static/js/showdown.min'
  import hljs from 'highlight.js'

  export default {
    name: 'BlogEdit',
    data: function () {
      let blog = {
        id: this.$route.query.id,
        title: 'title',
        content: 'content'
      }
      return {
        blog: blog
      }
    },
    methods: {
      flush: function () {
        console.log('flush')
        let text = this.$refs.content.value
        let converter = new showdown.Converter()
        let _html = converter.makeHtml(text)
        this.$refs.result.innerHTML = _html
        this.$nextTick(function () {
          [].forEach.call(document.querySelectorAll('pre code'), hljs.highlightBlock)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../../static/css/rainbow.css";
</style>
<style scoped>
  a {
    color: #42b983;
  }

  .blog-edit {
    display: flex;
  }

  .edit-area {
    padding: 20px;
    width: 50%;
  }
  .show-area {
    padding: 20px;
    width: 50%;
  }

  .blog-id {
    display: none;
  }

  .title {
    margin: 5px;
  }

  .title input {
    padding: 0.4em;
    font-size: 25px;
  }

  .content {
    position: relative;
    margin: 5px;
    height: 400px;
    width: 90%;
  }

  .content textarea {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0.4em;
    font-size: 18px;
    resize: none;
    width: 100%;
    /*box-sizing: content-box;*/
    -moz-box-sizing: content-box;
  }
</style>
