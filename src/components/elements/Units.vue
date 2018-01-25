<template>
  <div class="main">
    <h1></h1>
    <button class="back" v-on:click="$emit('back')">Back</button>
  </div>
</template>

<script>
export default {
  name: 'units',
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
