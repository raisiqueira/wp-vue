<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Bitters from 'bourbon-bitters';

export default {
  name: 'app',
  data () {
    return {
    }
  },

  created: function () {

  }
}
</script>

<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/_bourbon.scss";
  @import "~bourbon-bitters/app/assets/stylesheets/_bitters.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
