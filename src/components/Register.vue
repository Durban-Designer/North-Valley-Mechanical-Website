<template>
  <div class="main">
    <h1>Register</h1>
    <button class="back" v-on:click="$router.push('/Login')">Back</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: ['logged', 'user'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.main {
  height: 500px;
  width: 100%;
  margin-top: 120px;
}
button {
  background-color: #005389;
  color: #fff;
  border: none;
  font-size: 1.5em;
}
@media (min-width: 700px) {
}
</style>
