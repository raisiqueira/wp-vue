<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'post', params: {slug: post.slug} }">
        <div>
          <img :src="post.featured_image" alt="Blog Post Featured Image"/>
        </div>
        <h2>{{post.title.rendered}}</h2>
      </router-link>
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
    getPosts: async function () {
      let response = await Axios.get(`${CONFIG.API_URL}/posts?per_page=8`);
      this.posts = await this.getFeaturedImages(response.data);
    },

    getFeaturedImages: function (posts) {
      return new Promise((resolve) => {
        let requests = posts.map((post) => {
          return new Promise( async (resolve) => {
            let response = await Axios.get(`${CONFIG.API_URL}/media/${post.featured_media}`);
            post.featured_image = response.data.media_details.sizes['post-thumbnail'].source_url;
            resolve(post);
          });
        });

        Promise.all(requests).then((posts) => resolve(posts));
      });
    }
  }
}

</script>

<style scoped lang="scss">
  ul {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    grid-gap: 1rem;
    align-items: start;
  }

  li {
    display: flex;
    flex-direction: column;
  }
</style>
