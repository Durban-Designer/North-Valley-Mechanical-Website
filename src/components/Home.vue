<template>
  <div class="main">
    <div class="banner"></div>
    <h1>FAST, FRIENDLY, & EFFECTIVE SERVICE</h1>
    <ul>
      <li>Air Conditioning</li>
      <li>Heating</li>
      <li>Refridgeration</li>
      <li>Duct Upgrades</li>
      <li>Energy Audits</li>
    </ul>
    <div class="about1"></div>
    <p>
      North Valley Mechanical is an HVAC service company with more than 35 years
      of experience in providing quality service in the Phoenix area. When you hire us,
      you can rest easy knowing you will receive exceptional service in a timely fashion.
    </p>
    <h2 class="link" v-on:click="$router.push('/contact')" >Click here to schedule an appointment today!</h2>
  </div>
</template>

<script>
  export default {
    name: 'home',
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
    height: 1200px;
    width: 100%;
    margin-top: 100px;
  }
  
  .banner {
    background-image: url('../assets/banner.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 165px;
  }

  h1 {
    width: 100%;
    font-size: 2.9em;
    line-height: 40px;
    margin-top: 20px;
    color: @nvmblue;
    background-color: @nvmgrey;
    padding-left: 2%;
  }

  ul {
    font-size: 2em;
    width: 100%;
    background:  @nvmblue;
    color: #fff;
    list-style: none;
    font-weight: bold;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.5em;
    margin-top: 30px;
  }

  .about1 {
    width: 100%;
    height: 200px;
    border: 1px dashed black;
  }

  @media (min-width: 700px) {
  }
</style>
