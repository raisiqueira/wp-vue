<template>
  <div id="app">
    <transition name="fade">
      <Loader v-if="showLoader"/>
    </transition>

    <router-view @postsReceived="showLoader = false"></router-view>
  </div>
</template>

<script>
import Loader from './components/Loader';

export default {
  name: 'app',

  data() {
    return {
      showLoader: true
    }
  },

  components: {
    Loader
  }
}
</script>

<style lang="scss">
  @import "assets/scss/_base.scss";

  // .fade-leave-active {
  //   transition: opacity .25s
  // }

  // .fade-leave-to {
  //   opacity: 0
  // }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 2rem;
  }
</style>
