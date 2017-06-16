<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">

  @keyframes pulse {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      opacity: 0.0;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $white;
    animation: fadeIn .75s;
  }

  ul {
    transition: all .25s ease-out 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 0;
    background: rgba($dark-gray, .15);
    background: none;

    &:before {
      width: 12px;
      height: 12px;
      background: rgba($dark-gray, .65);
    }

    li {
      width: 100%;
      height: 100%;
      background: rgba($dark-gray, .65);
      animation: pulse 2.5s ease-in;
      animation-iteration-count: infinite;
    }
  }
</style>
