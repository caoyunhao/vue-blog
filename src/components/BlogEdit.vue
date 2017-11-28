<template>
  <div class="blog-edit">
    <form>
      <div class="title">
        <input type="text" :value="blog.title"/>
      </div>
      <div class="content">
        <textarea ref="content" :value="blog.content" @keyup="flush()"></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Submit"/>
      </div>
      <div ref="result">

      </div>
    </form>
  </div>
</template>

<script>
  import showdown from './../../static/js/showdown.min'
  import hljs from 'highlight.js'

  export default {
    name: 'BlogEdit',
    data: function () {
      return {
        blog: {
          title: 'title',
          content: 'content'
        }
      }
    },
    mounted: function () {
      console.log('mounted')
//      this.flush()
    },
    methods: {
      flush: function () {
        let text = this.$refs.content.value
        let converter = new showdown.Converter()
        let _html = converter.makeHtml(text)
        this.$refs.result.innerHTML = _html
        this.$nextTick(function () {
          console.log('highlightBlock');
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
    text-align: left;
  }

  .title {
    font-size: 32px;
  }

  .content {
    font-size: 20px;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #474949;
    color: #d1d9e1;
  }

  .hljs-comment,
  .hljs-quote {
    color: #969896;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-type,
  .hljs-addition {
    color: #cc99cc;
  }

  .hljs-number,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #f99157;
  }

  .hljs-string,
  .hljs-doctag,
  .hljs-regexp {
    color: #8abeb7;
  }

  .hljs-title,
  .hljs-name,
  .hljs-section,
  .hljs-built_in {
    color: #b5bd68;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-id,
  .hljs-class .hljs-title {
    color: #ffcc66;
  }

  .hljs-section,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-subst,
  .hljs-meta,
  .hljs-link {
    color: #f99157;
  }

  .hljs-deletion {
    color: #dc322f;
  }

  .hljs-formula {
    background: #eee8d5;
  }

  .hljs-attr,
  .hljs-attribute {
    color: #81a2be;
  }

  .hljs-emphasis {
    font-style: italic;
  }
</style>
