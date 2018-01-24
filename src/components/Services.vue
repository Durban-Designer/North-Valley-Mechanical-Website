<template>
  <div class="main">
    <div class="cooling" v-if="modal==='cool'">
      <h2>Air Conditioning</h2>
      <div class="acImage"></div>
      <h4>Keeping Arizona Cool</h4>
      <p class="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend
        donec pretium vulputate sapien nec sagittis. Pulvinar sapien et ligula
        ullamcorper malesuada proin libero. In cursus turpis massa tincidunt dui.
        Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Sed augue
        lacus viverra vitae congue eu consequat ac.
      </p>
      <h4>Budget Friendly System</h4>
      <p class="p2">
        Mauris sit amet massa vitae. Amet consectetur adipiscing elit ut aliquam
        purus. Sit amet risus nullam eget felis. Condimentum vitae sapien pellentesque
        habitant morbi tristique senectus et. Quam viverra orci sagittis eu volutpat
        odio. Interdum velit euismod in pellentesque. Metus vulputate eu scelerisque
        felis. Ut enim blandit volutpat maecenas volutpat blandit.
      </p>
      <button class="requestQuote">REQUEST A QUOTE NOW</button>
    </div>
    <div class="heating" v-else-if="modal==='hot'">
    </div>
    <div class="maintenance" v-else-if="modal==='maintenance'">
    </div>
    <div class="services" v-else>
      <h1>Services</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['logged', 'user'],
    data () {
      return {
        modal: 'cool'
      }
    }
  }
</script>

<style scoped lang="less">
  @nvmGrey: #dae5ed;
  @nvmBlue: #005389;
  @nvmRed: #b20938;
  @nvmlightred: #e21b3c;
  .main {
    height: 1500px;
    width: 100%;
    margin-top: 120px;
  }

  h1 {
    color: @nvmRed;
    margin: 0;
    padding: 0 15px;
  }

  h2 {
    font-size: 3em;
    color: @nvmlightred;
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 0 15px;
  }

  h4 {
    color: @nvmBlue;
    margin: 0;
    padding: 0 15px;
    padding-top: 50px;
    text-align: center;
    width: 100%;
  }

  p {
    margin-top: 20px;
    float: right;
    width: 100%!important;
    padding: 0 1.5em;
    line-height: 24px;
    text-align: center;
  }

  button {
    font-weight: bold;
    color: #fff;
    font-size: 1em;
    background: linear-gradient(#e21b3c, #b20938);
    text-decoration: none;
    transition: all .5s;
    transition-timing-function: cubic-bezier(0.42,0,0.58,1);
  }

  button:hover {
    background: @nvmGrey;
    color: @nvmRed;
    border: 1px solid @nvmRed;
    text-decoration: none;
  }

  .requestQuote {
    margin-top: 10px;
    width: 100%;
    padding: 1em 0;
  }

  @media (min-width: 700px) {
  }
</style>
