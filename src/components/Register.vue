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
@nvmgrey: #dae5ed;
@nvmblue: #005389;
@nvmred: #b20938;
.main {
  height: 500px;
  width: 100%;
  margin-top: 120px;
}
h1 {
  color: @nvmred;
  text-align: center;
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
