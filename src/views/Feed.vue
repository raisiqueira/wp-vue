<template>
  <div>
    This is a post!
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Feed',

  data () {
    return {
    }
  },

  created: function () {
    Axios.get('http://loripsum.net/')
      .then(function(response) {
        console.log(response)
      })
  }
}
</script>

<style scoped lang="scss">

</style>
