<template>
  <div class="main">
    <h1>messaging</h1>
  </div>
</template>

<script>
  export default {
    name: 'messaging',
    props: ['logged', 'user'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .main {
    margin-top: 120px;
  }
</style>
