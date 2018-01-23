<template>
  <div class="main">
    <div class="navbar">
      <div v-bind:class="nvLogic" v-on:click="navToggle"></div>
      <div v-bind:class="navpaneLogic">
        <button v-bind:class="HomeLogic" v-on:click="navToggle(); $router.push('/')">Home</button>
        <button v-bind:class="ServicesLogic" v-on:click="navToggle(); $router.push('/services')">Services</button>
        <button v-bind:class="ReviewsLogic" v-on:click="navToggle(); $router.push('/Reviews')">Reviews</button>
        <button v-bind:class="ContactLogic" v-on:click="navToggle(); $router.push('/contact')">Contact</button>
        <button v-bind:class="LoginLogic" v-on:click="navToggle(); $router.push('/Login')">Login</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  created () {
    let vue = this
    function toggleShow () {
      if (vue.show === 0) {
        vue.show = 1
      }
      else if (vue.show === 1) {
        vue.show = 2
      }
      else if (vue.show === 2) {
        vue.show = 3
      }
      else if (vue.show === 3) {
        vue.show = 4
      }
      else if (vue.show === 4) {
        vue.show = 5
      }
    }
    setInterval(toggleShow, 4000)
  },
  computed: {
    nvLogic: function () {
      return {
        nv: true,
        navButtonAnimation: this.isToggled,
        navButtonAnimationExit: !this.isToggled && !this.first
      }
    },
    navpaneLogic: function () {
      return {
        navpane: this.first,
        navpaneAnimation: this.isToggled,
        navpaneAnimationExit: !this.isToggled && !this.first
      }
    },
    HomeLogic: function () {
      return {
        Home: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    ServicesLogic: function () {
      return {
        Services: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    ContactLogic: function () {
      return {
        Contact: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    ReviewsLogic: function () {
      return {
        Reviews: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    LoginLogic: function () {
      return {
        Login: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 720) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        }
        else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      }
      else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="less">
.navpane {
  display: none;
  overflow: hidden;
}
.main {
  width: 100%;

}
.nv {
  margin-top: 20px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-top: 10px;
  margin-right: 10px;
  grid-column: 4;
  z-index: 8;
  background-repeat: no-repeat;
  background-image: url("../../assets/navbuttonAnimationWhite.svg");
}
.navbar {
  width: 100%;
  height: 100px;
  background: linear-gradient(#005DA6, #014271);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  text-align: center;
  line-height: 70px;
  font-weight: lighter;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
  grid-template-rows: 100px;
}

.navpaneAnimation {
  animation: navpaneAnimation .3s steps(9);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  grid-column-start: 2;
  grid-column-end: 5;
  z-index: 10;
  width: 100%;
  height: 400px;
  margin-top: 15px;
  background: #b20938;
  color: #fff;
  outline: solid 2px ;
  outline-color: #fff;
  outline-offset: -6px;
}

.navpaneAnimationExit {
  animation: navpaneAnimationReverse .3s steps(9);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

}

.Home {
  box-shadow: none;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2.5em;
  width: 100%;
  font-weight: 400;
}
.Reviews {
  background-color: transparent;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2.5em;
  font-weight: 400;
}

.Contact {
  background-color: transparent;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2.5em;
  font-weight: 400;
}

.Services {
  background-color: transparent;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2.5em;
  font-weight: 400;
}
.Login {
  background-color: transparent;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2.5em;
  font-weight: 400;
}
@keyframes navpaneAnimation {

  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes navpaneAnimationReverse {
  0% { opacity: 1; }
  100% { opacity: 0;}
}

@keyframes navButtonAnimation {
  100% {background-position: -1440px;}
}

@keyframes navButtonAnimationReverse {
  0% {background-position: -1440px;}
  100% {background-position: 0px;}
}
.navButtonAnimation {
  animation: navButtonAnimation .35s steps(18);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.navButtonAnimationExit {
  animation: navButtonAnimationReverse .35s steps(18);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.hidden {
  display: none;
}

@media (min-width: 700px) {
  .navpane {
    width: 100%;
    height: 120px;
    z-index: 3;
    text-align: center;
    line-height: 70px;
    font-weight: lighter;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
    grid-template-rows: 100px;
  }

  .nv {
    display: none;
  }
}
</style>
