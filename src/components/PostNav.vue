<template>
  <nav>
    <router-link :to="{path: '/'}">Back to All Posts</router-link>
  </nav>
</template>

<script>
export default {
  name: 'PostNav'
}
</script>

<style scoped lang="scss">
  a {
    display: block;
    margin-bottom: 1rem;
  }
</style>
