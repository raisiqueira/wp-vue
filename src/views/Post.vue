<template>
  <article>
    <h1> {{ post.title.rendered }} </h1>
    <div v-html="post.content.rendered"></div>
  </article>
</template>

<script>
import CONFIG from '../model/config.js';
import Axios from 'axios';

export default {
  name: 'Post',

  data () {
    return {
      post: null
    }
  },

  created: async function () {
    let response = await Axios.get(`${CONFIG.API_URL}/posts?slug=${this.$route.params.slug}`);
    this.post = response.data[0];

    this.posts = await this.getFeaturedImages(response.data);
  }
}
</script>

<style scoped lang="scss">

</style>
