<template>
  <div>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <div>
          <router-link :to="{ name: 'post', params: { slug: post.slug } }">
            <img :src="post.featured_image" alt="Blog Post Featured Image"/>
          </router-link>
        </div>
        <span>
          <i>&mdash;</i>
            {{ getFormattedDate(post.date) }}
          <i>&mdash;</i>
        </span>
        <h2>
          <router-link :to="{ name: 'post', params: { slug: post.slug } }">
            {{ post.title.rendered }}
          </router-link>
        </h2>
      </li>
    </ul>

    <Pagination
      :currentPage="parseInt(page)"
      :totalPages="parseInt(totalPages)"
    ></Pagination>

  </div>
</template>

<script>
import bus from '../bus';
import Axios from 'axios';
import Pagination from '../components/Pagination';

export default {
  name: 'Feed',

  data () {
    return {
      posts: [],
      page: 1,
      totalPosts: null,
      totalPages: null
    }
  },

  watch: {
    page: function () {
      this.getPosts();
    }
  },

  beforeRouteUpdate: function (to, from, next) {
    this.page = to.params.page;
    this.getPosts();
  },

  mounted: function () {
    this.getPosts();
  },

  created: function () {
    if(this.$route.name === 'page') {
      this.page = this.$route.params.page;
    }
  },

  methods: {
    getPosts: async function () {
      let response = await Axios.get(`${API_URL}/posts?per_page=8&page=${this.page}`);

      this.totalPosts = response.headers['x-wp-total'];
      this.totalPages = response.headers['x-wp-totalpages'];

      this.posts = await this.getFeaturedImages(response.data);
      bus.emit('toggleLoading', false);
    },

    getFeaturedImages: function (posts) {
      return new Promise((resolve) => {
        let requests = posts.map((post) => {
          return new Promise( async (resolve) => {
            let response = await Axios.get(`${API_URL}/media/${post.featured_media}`);
            post.featured_image = response.data.media_details.sizes['medium'].source_url;
            resolve(post);
          });
        });

        Promise.all(requests).then((posts) => resolve(posts));
      });
    }
  },

  components: {
    Pagination
  }
}

</script>

<style scoped lang="scss">
  ul {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 320px, auto ) );
    grid-gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    background: $gray--extraLight;
    padding: 2rem 1rem;
    text-align: center;

    a {
      display: block;
    }
  }

  img {
    transition: box-shadow .15s ease-in-out;
    box-shadow: 0 0 0 2px $gray--light;

    &:hover {
      box-shadow: 0 0 0 3px $gray--light;
    }
  }

  span {
    font-size: $small-font-size;
    color: $gray--medium;
  }

  h2 {
    margin: .25rem 0 1rem;
  }

  a {
    color: inherit;

    &:hover {
      color: $salmon;
    }

    &:focus {
      outline: none;
    }
  }
</style>
