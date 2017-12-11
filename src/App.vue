<template>
  <div id="app">
    <div id="wrapper">
      <transition name="fade">
        <Loading v-if="isLoading" />
      </transition>
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

    created: function () {
      bus.$on('toggleLoading', (status) => {
        this.isLoading = status;
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
