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
      opacity: 0.0;
    }
    25% {
      transform: scale(0);
      opacity: 0.1;
    }
    50% {
      transform: scale(0.1);
      opacity: 0.3;
    }
    75% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.25);
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

    &:before,
    &:after,
    li {
      content: '';
      display: block;
      position: absolute;
      width: 65%;
      height: 65%;
      background: rgba($dark-gray, .25);
      border-radius: 50%;
      z-index: 1;
    }

    &:before {
      width: 25%;
      height: 25%;
      background: rgba($dark-gray, .65);
    }

    li {
      width: 100%;
      height: 100%;
      background: rgba($dark-gray, .9);
      animation: pulse 3s ease-out;
      animation-iteration-count: infinite;
    }
  }
</style>
