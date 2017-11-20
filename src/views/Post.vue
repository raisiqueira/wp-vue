<template>
  <div>

    <PostNav></PostNav>

    <article>
      <header>
        <img
          v-if="featured_image"
          :src="featured_image"
        >
        <h1>{{ title }}</h1>
      </header>

      <PostBody :content="content"></PostBody>
    </article>

  </div>
</template>

<script>
import Axios from 'axios';
import PostBody from '../components/PostBody';
import PostNav from '../components/PostNav';

const getterSetter = function (property) {
  return {
    get: function () {
      return this.post.hasOwnProperty(property)
        ? this.post[property].rendered
        : '';
    },

    set: function (value) {
      return this.post[property].rendered = value;

    }
  }
};

export default {
  name: 'Post',

  data () {
    return {
      post: {},
      featured_image: ''
    }
  },

  computed: {
    title: getterSetter('title'),
    content: getterSetter('content')
  },

  created: async function () {
    this.post = await this.getPost();
    this.featured_image = await this.getFeaturedImage(this.post.featured_media);
  },

  methods: {
    getPost: async function () {
      let response = await Axios.get(`${API_URL}/posts?slug=${this.$route.params.slug}`);
      return response.data[0];
    },

    getFeaturedImage: async function (id) {
      let response = await Axios.get(`${API_URL}/media/${id}`);
      return response.data.media_details.sizes['medium'].source_url;
    }
  },

  components: {
    PostBody,
    PostNav
  }
}
</script>

<style scoped lang="scss">
  article {
    max-width: 800px;
    margin: 0 auto;
    background: $gray--extraLight;
    padding: 2rem;
  }

  header {
    text-align: center;
  }

  h1 {
    margin: 2rem 0;
  }

  a {
    display: block;
    margin-bottom: 1rem;
  }
</style>
