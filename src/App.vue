<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
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
  @import "~bourbon-bitters/app/assets/stylesheets/_bitters.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
