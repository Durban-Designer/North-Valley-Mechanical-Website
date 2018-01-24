<template>
  <div class="main">
    <div class="specialA" onloadedmetadata="" v-if="modal==='specA'">
      <h1>Limited Time Offer!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="specialB" v-else-if="modal==='specB'">
      <h1>Limited Time Offer!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="specialC" v-else-if="modal==='specC'">
      <h1>Limited Time Offer!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="specialD" v-else-if="modal==='specD'">
      <h1>Limited Time Offer!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="specialE" v-else-if="modal==='specE'">
      <h1>Limited Time Offer!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="tiles" v-else>
      <h3>Specials</h3>
      <div class="specA" v-on:click="modal='specA'">Special A</div>
      <div class="specB" v-on:click="modal='specB'">Special B</div>
      <div class="specC" v-on:click="modal='specC'">Special C</div>
      <div class="specD" v-on:click="modal='specD'">Special D</div>
      <div class="specE" v-on:click="modal='specE'">Special E</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'specials',
    props: ['logged', 'user'],
    data () {
      return {
        modal: ''
      }
    }
  }
</script>

<style scoped lang="less">
@nvmgrey: #dae5ed;
@nvmblue: #005389;
@nvmred: #b20938;
@nvmlightred: #e21b3c;
  .main {
    height: 1000px;
    width: 100%;
    margin-top: 120px;
  }
  h3 {
    color: @nvmlightred;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    width: 100%;
    text-align: center;
    color: @nvmblue;
  }

  button {
    background: linear-gradient(#e21b3c, #b20938);
    color: #fff;
    border: none;
    font-size: 1.5em;
    margin-left: 10px;
  }
  .specA {
    width: 100%;
    height: 70px;
    background-color: @nvmgrey;
    color: @nvmred;
    font-size: 1.5em;
    padding-left: 5%;
    line-height: 45px;
    margin-bottom: 20px;
  }

  .specB {
    width: 100%;
    height: 70px;
    background-color: @nvmgrey;
    color: @nvmred;
    font-size: 1.5em;
    padding-left: 5%;
    line-height: 45px;
    margin-bottom: 20px;
  }

  .specC {
    width: 100%;
    height: 70px;
    background-color: @nvmgrey;
    color: @nvmred;
    font-size: 1.5em;
    padding-left: 5%;
    line-height: 45px;
    margin-bottom: 20px;
  }

  .specD {
    width: 100%;
    height: 70px;
    background-color: @nvmgrey;
    color: @nvmred;
    font-size: 1.5em;
    padding-left: 5%;
    line-height: 45px;
    margin-bottom: 20px;
  }

  .specE {
    width: 100%;
    height: 70px;
    background-color: @nvmgrey;
    color: @nvmred;
    font-size: 1.5em;
    padding-left: 5%;
    line-height: 45px;
    margin-bottom: 20px;
  }
</style>
