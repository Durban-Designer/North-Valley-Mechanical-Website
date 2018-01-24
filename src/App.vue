<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <navbar v-on:logout="logout" :logged="logged" :user="user" :app="app"></navbar>
    <transition name="fade">
      <router-view v-on:login="login" v-on:logout="logout" :logged="logged" :user="user"/>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './components/elements/Navbar'
import Foot from './components/elements/Foot'
export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'foot': Foot
  },
  created () {
    let vue = this
    vue.user.token = localStorage.getItem('token')
    vue.user.id = localStorage.getItem('userId')
    vue.user.role = localStorage.getItem('role')
    if (vue.user.token !== null) {
      vue.logged = true
    }
  },
  data: function () {
    return {
      logged: false,
      app: false,
      user: {
        id: '',
        token: '',
        role: ''
      }
    }
  },
  methods: {
    login: function (user) {
      let vue = this
      vue.user.token = user.token
      vue.user.id = user.id
      vue.user.role = user.role
      vue.logged = true
      if (vue.user.role === 'employee') {
        vue.$router.push('/messaging')
      }
      else {
        vue.$router.push('/account')
      }
    },
    logout: function () {
      let vue = this
      vue.user.token = ''
      vue.user.id = ''
      vue.logged = false
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('role')
      if (vue.app === false) {
        vue.$router.push('/')
      }
      else {
        vue.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
