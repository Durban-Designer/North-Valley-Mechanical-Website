<template>
  <div class="main">
    <h1>Register</h1>
    <input class="firstName" v-model="activeUser.firstName" placeholder="First Name"></input>
    <input class="middleName" v-model="activeUser.middleName" placeholder="Middle Name"></input>
    <input class="lastName" v-model="activeUser.lastName" placeholder="Last Name"></input>
    <input class="phone" v-model="activeUser.phone" placeholder="(***)-***-****"></input>
    <input class="addressOne" v-model="activeUser.address1" placeholder="Address One"></input>
    <input class="addressTwo" v-model="activeUser.address2" placeholder="Address Two"></input>
    <select class="role" v-model="activeUser.role">
      <option value='' selected data-default>Ownership Status</option>
      <option value="tenant">Tenant</option>
      <option value="owner">Home Owner</option>
      <option value="landlord">Landlord / Property Manager</option>
    </select>
    <input class="email" v-model="activeUser.email" placeholder="user@example.com"></input>
    <input class="password" v-model="activeUser.password" placeholder="*********" type="password" v-if="!showPass" v-on:keypress.enter="registerUser">
    <input class="password" v-model="activeUser.password" placeholder="*********" v-if="showPass" v-on:keypress.enter="registerUser">
    <button class="togglePass" v-on:click="showPass = !showPass" v-if="!showPass">Show Password</button>
    <button class="togglePass" v-on:click="showPass = !showPass" v-if="showPass">Hide Password</button>
    <button class="submitRegister" v-on:click="registerUser">Submit</button>
    <button class="back" v-on:click="$router.push('/Login')">Back</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  props: ['logged', 'user'],
  data () {
    return {
      showPass: false,
      activeUser: {
        email: '',
        password: '',
        role: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        address1: '',
        address2: ''
      }
    }
  },
  methods: {
    registerUser () {
      let vue = this
      axios.post('http://54.219.138.159:81/users', {
        email: vue.activeUser.email,
        password: vue.activeUser.password,
        role: vue.activeUser.role,
        firstName: vue.activeUser.firstName,
        middleName: vue.activeUser.middleName,
        lastName: vue.activeUser.lastName,
        phone: vue.activeUser.phone,
        address1: vue.activeUser.address1,
        address2: vue.activeUser.address2
      })
        .then(function () {
          vue.$router.push('/account')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
.main {
  height: 500px;
  width: 100%;
  margin-top: 120px;
}

select option[data-default] {
  color: #888;
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
