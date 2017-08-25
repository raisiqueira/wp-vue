<template>
  <ul>
    <li v-for="post in posts">
      <div class="featured-image">
        <img :src="post.featured_image" alt="Blog Post Featured Image"/>
      </div>
      <h2>{{post.title.rendered}}</h2>
    </li>
  </ul>
</template>

<script>
import CONFIG from '../model/config.js';
import Axios from 'axios';

export default {
  name: 'Feed',

  data () {
    return {
      posts: []
    }
  },

  mounted: function () {
    this.getPosts();
  },

  methods: {
    async getPosts () {
      let response = await Axios.get(`${CONFIG.API_URL}/posts?per_page=8`);
      let posts = response.data;

      posts.forEach(async (value, i) => {
        let response = await Axios.get(`${CONFIG.API_URL}/media/${value.featured_media}`);
        posts[i].featured_image = response.data.media_details.sizes.medium.source_url;
        console.log('posts recieved and processed!');
        this.$emit('postsReceived');
      });
    }
}

</script>

<style scoped lang="scss">

</style>
