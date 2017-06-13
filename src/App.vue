<template>
  <div id="app">
    <transition
      v-on:leave="leave"
      name="fade">
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

  methods: {
    leave: function () {
      setTimeout(() => {
        document.documentElement.style.overflow = "auto";
      }, 250);
    }
  },

  components: {
    Loader
  }
}
</script>

<style lang="scss">
  @import "assets/scss/_base.scss";

  html {
    overflow: hidden;

    &.noOverflow {
      overflow: auto;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
