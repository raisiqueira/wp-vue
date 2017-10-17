<template>
  <div id="app">
    <div id="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
