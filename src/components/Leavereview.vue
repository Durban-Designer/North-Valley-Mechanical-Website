<template>
  <div class="main">
    <h1>Leave A Review</h1>
    <button class="back" v-on:click="$router.push('/Reviews')">Back</button>
  </div>
</template>

<script>
  export default {
    name: 'Leavereview',
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
    height: 500px;
    width: 100%;
    margin-top: 120px;
  }

  button {
    background: linear-gradient(#e21b3c, #b20938);
    color: #fff;
    border: none;
    font-size: 1.5em;
  }

  @media (min-width: 700px) {
  }
</style>
