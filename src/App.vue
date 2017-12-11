<template>
  <div id="app">
    <div id="wrapper">
      <Loading v-if="isLoading" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import bus from './bus';
  import Loading from './components/Loading';

  export default {
    name: 'App',

    data () {
      return {
        isLoading: true
      }
    },

    created: function {
      bus.$on('turnOnLoading', () => {
        this.isLoading = true;
      });

      bus.$on('turnOffLoading' () => {
        this.isLoading = false;
      });
    },

    components: {
      Loading
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/_base.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 2rem;
  }

  #wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
