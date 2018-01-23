<template>
  <div class="main">
    <h1>Log-In</h1>
    <div class="loginBox">
      <input class="email" placeholder="Email" v-model="email"></input>
      <input class="password" placeholder="Password" v-model="password" type="password" v-on:keypress.enter="login"></input>
      <h3 class="logged">Stay logged In?<input type="checkbox" v-model="stayLogged"></input></h3>
      <button class="login" v-on:click="login">Submit</button>
      <h2 class="registerlink" v-on:click="$router.push('/Register')">Create a New Account Here</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
  text-align:center;
}
h1 {

}
.registerlink {
  font-size: 1em;
  color: #005389;
}
.logged {
  font-size: 1.4em;
}
button {
  background-color: #005389;
  color: #fff;
  border: none;
  font-size: 1.5em;
}
input {
  border: 1px solid black;
  margin-top: 5px;
  height: 30px;
}
@media (min-width: 700px) {
}
</style>
