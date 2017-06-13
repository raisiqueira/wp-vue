<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <h2>{{post.title.rendered}}</h2>
        <p v-html="post.excerpt.rendered"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Feed',

  data () {
    return {
      posts: []
    }
  },

  created: function () {
    this.setPosts();
  },

  watch: {
    posts: function () {
      for(let post in this.posts) {

      }
    }
  },

  methods: {
    setPosts: function() {
      return Axios.get('http://bb.dev/wp-json/wp/v2/posts')
        .then((response) => {
          this.$emit('postsReceived');
          this.posts = response.data
          return;
        })
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
  }
</style>
