<template>
  <ul>
    <li v-for="post in posts">
      <div class="featured-image">
        <img :src="post.featured_image" alt="Blog Post Featured Image"/>
      </div>
      <h2>{{post.title.rendered}}</h2>
    </li>

    <li>
      <img :src="this.logo"/>
    </li>
  </ul>
</template>

<script>
import Axios from 'axios';
import Logo from '../assets/img/logo.svg';

export default {
  name: 'Feed',

  data () {
    return {
      posts: []
    }
  },

  computed: {
    logo: function () {
      return Logo;
    }
  },

  mounted: function () {
    this.setPosts();
  },

  methods: {
    setPosts () {
      Axios.get('https://www.businessboutique.com/wp-json/wp/v2/posts?per_page=8')
        .then((response) => {
          let tempPosts = response.data;

          let totalImg = 0;
          tempPosts.forEach((value, i) => {
            Axios.get('https://www.businessboutique.com/wp-json/wp/v2/media/' + value.featured_media)
            .then((response) => {
              totalImg++;
              tempPosts[i].featured_image = response.data.media_details.sizes.medium.source_url;

              if(totalImg === tempPosts.length) {
                this.posts = tempPosts;
                this.$emit('postsReceived');
              }
            });
          });
        })
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    grid-gap: 30px;
  }

  li {
    display: flex;
    flex-direction: column;
    background: rgba($light-gray, .2);
  }

  .featured-image {
    position: relative;
    height: 0;
    padding-bottom: 56.7%;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  h2 {
    padding: 1.5rem;
  }

  li:last-child {
    display: flex;
    align-content: center;
    grid-area: 2 / 2 / 2 / 2;
    background: none;
    padding: 2rem;

    img {
      margin: 0 auto;
      flex: 1;
    }
  }
</style>
