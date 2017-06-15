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
      Axios.get('https://www.businessboutique.com/wp-json/wp/v2/posts')
        .then((response) => {
          this.$emit('postsReceived');
          this.posts = response.data

          console.log(this.posts[0].featured_media);

          Axios.get('https://www.businessboutique.com/wp-json/wp/v2/media/' + this.posts[0].featured_media)
          .then((response) => {
            console.log(response.data);
          });

          return;
        })
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
  }
</style>
