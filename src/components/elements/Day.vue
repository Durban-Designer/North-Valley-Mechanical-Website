<template>
  <div class="main">
    <div class="calendarButton" v-on:click="calendar">
      <div class="monthNum">{{ this.monthDay }}</div>
      <div class="dayNum">{{ this.dayNum }}</div>
      <div class="yearNum">{{ this.yearNum }}</div>
    </div>
    <div class="back" v-on:click="backDay"><div class="backIcon">&#10094;</div></div>
    <div class="next" v-on:click="nextDay"><div class="nextIcon">&#10095;</div></div>
    <div class="dayView">
      <div class="twelveAm" v-on:click="appointmentClick()">12:00am<hr/></div>
      <div class="oneAm" v-on:click="appointmentClick()">1:00am<hr/></div>
      <div class="twoAm" v-on:click="appointmentClick()">2:00am<hr/></div>
      <div class="threeAm" v-on:click="appointmentClick()">3:00am<hr/></div>
      <div class="fourAm" v-on:click="appointmentClick()">4:00am<hr/></div>
      <div class="fiveAm" v-on:click="appointmentClick()">5:00am<hr/></div>
      <div class="sixAm" v-on:click="appointmentClick()">6:00am<hr/></div>
      <div class="sevenAm" v-on:click="appointmentClick()">7:00am<hr/></div>
      <div class="eightAm" v-on:click="appointmentClick()">8:00am<hr/></div>
      <div class="nineAm" v-on:click="appointmentClick()">9:00am<hr/></div>
      <div class="tenAm" v-on:click="appointmentClick()">10:00am<hr/></div>
      <div class="elevenAm" v-on:click="appointmentClick()">11:00am<hr/></div>
      <div class="twelvePm" v-on:click="appointmentClick()">12:00pm<hr/></div>
      <div class="onePm" v-on:click="appointmentClick()">1:00pm<hr/></div>
      <div class="twoPm" v-on:click="appointmentClick()">2:00pm<hr/></div>
      <div class="threePm" v-on:click="appointmentClick()">3:00pm<hr/></div>
      <div class="fourPm" v-on:click="appointmentClick()">4:00pm<hr/></div>
      <div class="fivePm" v-on:click="appointmentClick()">5:00pm<hr/></div>
      <div class="sixPm" v-on:click="appointmentClick()">6:00pm<hr/></div>
      <div class="sevenPm" v-on:click="appointmentClick()">7:00pm<hr/></div>
      <div class="eightPm" v-on:click="appointmentClick()">8:00pm<hr/></div>
      <div class="ninePm" v-on:click="appointmentClick()">9:00pm<hr/></div>
      <div class="tenPm" v-on:click="appointmentClick()">10:00pm<hr/></div>
      <div class="elevenPm" v-on:click="appointmentClick()">11:00pm<hr/></div>
      <div class="appointment" v-for="appointment in appointments" v-bind:class="appointmentLogic(appointment)" v-on:click="appointmentClick(appointment)" >{{appointment.title}}</div>
    </div>
    <appointmentSet v-if="appointmentShow" v-on:backAppointment="appointmentShow = false"  v-on:saveAppointment="appointmentSave" :editable="editable" :appointmentProp="clickedAppointment"></appointmentSet>
  </div>
</template>

<script>
  import AppointmentSet from './AppointmentSet'

  export default {
    name: 'days',
    props: ['monthDay', 'dayNum', 'yearNum', 'appointmentsProp'],
    components: {
      'appointmentSet': AppointmentSet
    },
    data: function () {
      return {
        appointments: [],
        clickedAppointment: [],
        appointmentShow: false,
        editable: true
      }
    },
    created () {
      let i = 0
      this.appointmentsClear()
      for (i = 0; i < this.appointmentsProp.length; i++) {
        this.appointments.push(this.appointmentsProp[i])
      }
    },
    methods: {
      appointmentLogic: function (appointment) {
        return {
          appointment: true,
          'twelveAmStart': appointment.timeStart === 'twelveAm',
          'twelveAmEnd': appointment.timeEnd === 'twelveAm',
          'oneAmStart': appointment.timeStart === 'oneAm',
          'oneAmEnd': appointment.timeEnd === 'oneAm',
          'twoAmStart': appointment.timeStart === 'twoAm',
          'twoAmEnd': appointment.timeEnd === 'twoAm',
          'threeAmStart': appointment.timeStart === 'threeAm',
          'threeAmEnd': appointment.timeEnd === 'threeAm',
          'fourAmStart': appointment.timeStart === 'fourAm',
          'fourAmEnd': appointment.timeEnd === 'fourAm',
          'fiveAmStart': appointment.timeStart === 'fiveAm',
          'fiveAmEnd': appointment.timeEnd === 'fiveAm',
          'sixAmStart': appointment.timeStart === 'sixAm',
          'sixAmEnd': appointment.timeEnd === 'sixAm',
          'sevenAmStart': appointment.timeStart === 'sevenAm',
          'sevenAmEnd': appointment.timeEnd === 'sevenAm',
          'eightAmStart': appointment.timeStart === 'eightAm',
          'eightAmEnd': appointment.timeEnd === 'eightAm',
          'nineAmStart': appointment.timeStart === 'nineAm',
          'nineAmEnd': appointment.timeEnd === 'nineAm',
          'tenAmStart': appointment.timeStart === 'tenAm',
          'tenAmEnd': appointment.timeEnd === 'tenAm',
          'elevenAmStart': appointment.timeStart === 'elevenAm',
          'elevenAmEnd': appointment.timeEnd === 'elevenAm',
          'twelvePmStart': appointment.timeStart === 'twelvePm',
          'twelvePmEnd': appointment.timeEnd === 'twelvePm',
          'onePmStart': appointment.timeStart === 'onePm',
          'onePmEnd': appointment.timeEnd === 'onePm',
          'twoPmStart': appointment.timeStart === 'twoPm',
          'twoPmEnd': appointment.timeEnd === 'twoPm',
          'threePmStart': appointment.timeStart === 'threePm',
          'threePmEnd': appointment.timeEnd === 'threePm',
          'fourPmStart': appointment.timeStart === 'fourPm',
          'fourPmEnd': appointment.timeEnd === 'fourPm',
          'fivePmStart': appointment.timeStart === 'fivePm',
          'fivePmEnd': appointment.timeEnd === 'fivePm',
          'sixPmStart': appointment.timeStart === 'sixPm',
          'sixPmEnd': appointment.timeEnd === 'sixPm',
          'sevenPmStart': appointment.timeStart === 'sevenPm',
          'sevenPmEnd': appointment.timeEnd === 'sevenPm',
          'eightPmStart': appointment.timeStart === 'eightPm',
          'eightPmEnd': appointment.timeEnd === 'eightPm',
          'ninePmStart': appointment.timeStart === 'ninePm',
          'ninePmEnd': appointment.timeEnd === 'ninePm',
          'tenPmStart': appointment.timeStart === 'tenPm',
          'tenPmEnd': appointment.timeEnd === 'tenPm',
          'elevenPmStart': appointment.timeStart === 'elevenPm',
          'elevenPmEnd': appointment.timeEnd === 'elevenPm',
          'personal': appointment.type === 'personal',
          'profesional': appointment.type === 'professional',
          'installation': appointment.type === 'installation',
          'estimate': appointment.type === 'estimate'
        }
      },
      appointmentHide: function () {
        this.appointmentShow = false
      },
      appointmentSave: function (appointment) {
        this.appointmentShow = false
        if (appointment !== null) {
          this.appointments.push(appointment)
        }
      },
      backDay: function () {
        this.$emit('backDay')
        this.appointmentsClear()
      },
      nextDay: function () {
        this.$emit('nextDay')
        this.appointmentsClear()
      },
      calendar: function () {
        this.$emit('calendar')
      },
      appointmentsPopulate: function () {
        this.appointments.push({timeStart: 'twoAm', timeEnd: 'fourAm', type: 'personal', title: 'Lunch', description: ''}, {timeStart: 'fiveAm', timeEnd: 'sevenAm', type: 'personal', title: 'Lunch', description: ''})
      },
      appointmentsClear: function () {
        this.appointments = []
      },
      appointmentClick: function (appointment) {
        let appointmentPos = this.appointments.indexOf(appointment)
        this.clickedAppointment = this.appointments[appointmentPos]
        this.appointmentShow = true
      }
    }
  }
</script>

<style scoped lang="less">
  @yellow: #f4c20d;
  @grey: #bbdef0;
  
  .main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 90px 860px 20px;
    background-color: @grey;
  }

  .dayView {
    grid-column: 2;
    grid-row: 2;
    height: 790px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(24, 2em);
    padding-top: 10px;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .calendarButton {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: @yellow;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 25px 20px 20px 20px;
    color: white;
  }

  .colorCode {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .personalColor {
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 25px;
    margin-bottom: 5px;
    grid-column: 5;
    grid-row: 1;
    background-color: rgba(255, 255, 0, .3);
    border: 1px solid black;
  }

  .professionalColor {
    margin-left: 5px;
    margin-right: 25px;
    margin-bottom: 5px;
    grid-column: 5;
    grid-row: 2;
    background-color: rgba(0, 255, 0, .3);
    border: 1px solid black;
  }

  .installationColor {
    margin-left: 5px;
    margin-right: 25px;
    margin-bottom: 5px;
    grid-column: 5;
    grid-row: 3;
    background-color: rgba(0, 0, 255, .3);
    border: 1px solid black;
  }

  .estimateColor {
    margin-left: 5px;
    margin-right: 25px;
    margin-bottom: 5px;
    grid-column: 5;
    grid-row: 4;
    background-color: rgba(255, 0, 0, .3);
    border: 1px solid black;
  }

  .appointment {
    text-align: center;
    margin-left: 70px;
  }

  .personal {
    background: rgba(255, 255, 0, .3);
  }

  .professional {
    background: rgba(0, 255, 0, .3);
  }

  .installation {
    background: rgba(0, 0, 255, .3);
  }

  .estimate {
    background: rgba(255, 0, 0, .3);
  }

  .monthNum {
    grid-column-start: 2;
    grid-column-end: ;
    grid-row-start: ;
    grid-row-end: ;
    font-size: 2em;
  }

  .dayNum {
    grid-column-start: ;
    grid-column-end: ;
    grid-row-start: ;
    grid-row-end: ;
    text-align: center;
    font-size: 2em;
  }

  .yearNum {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    font-size: 2em;
  }

  .back {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row: 2;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(24, 2em);
    background-color: @grey;
  }

  .backIcon {
    text-align: center;
    grid-row: 12;
  }

  .next {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row: 2;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(24, 2em);
    background-color: @grey;
  }

  .nextIcon {
    text-align: center;
    grid-row: 12;
  }

  /* times: half hour and 12am-11pm */

  .halfHour {
    margin-top: 5px;
  }

  .twelveAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 1;
  }

  .oneAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 2;
  }

  .twoAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 3;
  }

  .threeAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 4;
  }

  .fourAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 5;
  }

  .fiveAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 6;
  }

  .sixAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 7;
  }

  .sevenAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 8;
  }

  .eightAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 9;
  }

  .nineAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 10;
  }

  .tenAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 11;
  }

  .elevenAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 12;
  }

  .twelvePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 13;
  }

  .onePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 14;
  }

  .twoPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 15;
  }

  .threePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 16;
  }

  .fourPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 17;
  }

  .fivePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 18;
  }

  .sixPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 19;
  }

  .sevenPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 20;
  }

  .eightPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 21;
  }

  .ninePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 22;
  }

  .tenPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 23;
  }

  .elevenPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 24;
  }


  .twelveAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
  }

  .oneAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
  }

  .twoAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 3;
  }

  .threeAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 4;
  }

  .fourAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 5;
  }

  .fiveAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 6;
  }

  .sixAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 7;
  }

  .sevenAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 8;
  }

  .eightAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 9;
  }

  .nineAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 10;
  }

  .tenAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 11;
  }

  .elevenAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 12;
  }

  .twelvePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 13;
  }

  .onePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 14;
  }

  .twoPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 15;
  }

  .threePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 16;
  }

  .fourPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 17;
  }

  .fivePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 18;
  }

  .sixPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 19;
  }

  .sevenPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 20;
  }

  .eightPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 21;
  }

  .ninePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 22;
  }

  .tenPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 23;
  }

  .elevenPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 24;
  }

  .twelveAmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 1;
  }

  .oneAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 2;
  }

  .twoAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 3;
  }

  .threeAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 4;
  }

  .fourAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 5;
  }

  .fiveAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 6;
  }

  .sixAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 7;
  }

  .sevenAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 8;
  }

  .eightAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 9;
  }

  .nineAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 10;
  }

  .tenAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 11;
  }

  .elevenAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 12;
  }

  .twelvePmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 13;
  }

  .onePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 14;
  }

  .twoPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 15;
  }

  .threePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 16;
  }

  .fourPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 17;
  }

  .fivePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 18;
  }

  .sixPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 19;
  }

  .sevenPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 20;
  }

  .eightPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 21;
  }

  .ninePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 22;
  }

  .tenPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 23;
  }

  .elevenPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 24;
  }
</style>
