<template>
  <div class="main">
    <h1>Contact Us</h1>
  <div class="apptModal"v-if="modal==='appt'">
    <h1>Appointment</h1>
    <button class="back" v-on:click="modal=''">Back</button>
  </div>
  <div class="messageModal"v-if="modal==='mess'">
    <h1>Message</h1>
    <button class="back" v-on:click="modal=''">Back</button>
  </div>
  <div class="quoteModal"v-if="modal==='qte'">
    <h1>Quote</h1>
    <button class="back" v-on:click="modal=''">Back</button>
</div>
<div class="tiles" v-else>
  <div class="Appt" v-on:click="modal='appt'">Make an Appointment</div>
  <div class="Message" v-on:click="modal='mess'">Send a Message</div>
  <div class="Quote" v-on:click="modal='qte'">Request a Quote</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['logged', 'user'],
  data () {
    return {
      modal: ''
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
button{
  background: #b20938;
  color: #fff;
  border: none;
  font-size: 1.5em;
  margin-left: 10px;
}
.tiles {
  width: 90%;
  align-items: center;
  color: #fff;
  height: 50px;
  background-color: #b20938;
  margin-top: 20px;
  text-align: center;
  font-size: 2em;
  margin-left: 5%;
}
.Appt {
  width: 100%;
  height: 50px;
  background-color: #b20938;

}
.Message {
  width: 100%;
  height: 50px;
  background-color: #b20938;
  margin-top: 20px;
}
.Quote {
  width: 100%;
  height: 50px;
  background-color: #b20938;
  margin-top: 20px;
}
@media (min-width: 700px) {
}
</style>
