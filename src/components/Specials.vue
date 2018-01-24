<template>
  <div class="main">
    <h1>Specials</h1>
  </div>
</template>

<script>
  export default {
    name: 'specials',
    props: ['logged', 'user'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
@nvmgrey: #dae5ed;
@nvmblue: #005389;
@nvmred: #b20938;
@nvmlightred: #e21b3c;
  .main {
    height: 1000px;
    width: 100%;
    margin-top: 120px;
  }
  h1 {
    color: @nvmlightred;
    width: 100%;
    text-align: center;
  }
</style>
