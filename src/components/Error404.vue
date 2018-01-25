<template>
  <div class="main">
    <div class="load"></div>
  </div>
</template>

<script>
  export default {
    name: '404',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .main {
    margin-top: 600px;
  }

  .load {
    background-image: url("../assets/loadFan.svg");
    background-repeat: no-repeat;
  }
</style>
