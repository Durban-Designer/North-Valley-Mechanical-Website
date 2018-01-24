<template>
  <div class="main">
    <div class="apptModal" onloadedmetadata="" v-if="modal==='appt'">
      <h5>Make an Appointment</h5>
      <button class="back" v-on:click="modal=''">Back</button>
      <schedule class="schedule"></schedule>
    </div>
    <div class="messageModal" v-else-if="modal==='mess'">
      <h1>Message</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="quoteModal" v-else-if="modal==='qte'">
      <h1>Quote</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="tiles" v-else>
      <h3>Contact Us</h3>
      <div class="Appt" v-on:click="modal='appt'">Make an Appointment</div>
      <div class="Message" v-on:click="modal='mess'">Send a Message</div>
      <div class="Quote" v-on:click="modal='qte'">Request a Quote</div>
      <h2>(480)-538-9184</h2>
    </div>
  </div>
</template>

<script>
  import Schedule from './elements/Schedule'

  export default {
    name: 'Contact',
    props: ['logged', 'user'],
    components: {
      'schedule': Schedule
    },
    data () {
      return {
        modal: '',
        appointmentBox: false
      }
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

  h2 {
    color: #005da6;
    margin-top: 200px;
    width: 100%;
    text-align: center;
    font-size: 1.5em;
  }
  h3 {
    color: @nvmred;
    background: transparent;
  }

  button{
    background: #b20938;
    color: #fff;
    border: none;
    font-size: 1.5em;
    margin-left: 10px;
  }

  .schedule {
    margin-top: 0px;
  }

  .tiles {
    width: 90%;
    align-items: center;
    color: #fff;
    height: 50px;
    margin-top: 20px;
    text-align: center;
    font-size: 2em;
    margin-left: 5%;
  }

  .Appt {
    width: 100%;
    height: 50px;
    background-color: #b20938;
    line-height: 50px;
  }

  .Message {
    width: 100%;
    height: 50px;
    background-color: #b20938;
    margin-top: 20px;
    line-height: 50px;
  }

  .Quote {
    width: 100%;
    height: 50px;
    background-color: #b20938;
    margin-top: 20px;
    line-height: 50px;
  }

  @media (min-width: 700px) {
  }
</style>
