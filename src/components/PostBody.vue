<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  name: 'PostBody',

  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
