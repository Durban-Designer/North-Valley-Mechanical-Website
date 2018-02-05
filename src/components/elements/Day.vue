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
        appointments: [{}],
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
    grid-template-rows: 90px 330px 20px;
    background-color: @grey;
  }

  .dayView {
    grid-column: 2;
    grid-row: 2;
    height: 790px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(10, 2em);
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
    grid-template-rows: repeat(10, 2em);
    background-color: @grey;
  }

  .backIcon {
    text-align: center;
    grid-row: 5;
  }

  .next {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row: 2;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(10, 2em);
    background-color: @grey;
  }

  .nextIcon {
    text-align: center;
    grid-row: 5;
  }

  /* times: half hour and 12am-11pm */

  .halfHour {
    margin-top: 5px;
  }

  .eightAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 1;
  }

  .nineAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 2;
  }

  .tenAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 3;
  }

  .elevenAm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 4;
  }

  .twelvePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 5;
  }

  .onePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 6;
  }

  .twoPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 7;
  }

  .threePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 8;
  }

  .fourPm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 9;
  }

  .fivePm {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 10;
  }

 //starts
  .eightAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
  }

  .nineAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
  }

  .tenAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 3;
  }

  .elevenAmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 4;
  }

  .twelvePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 5;
  }

  .onePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 6;
  }

  .twoPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 7;
  }

  .threePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 8;
  }

  .fourPmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 9;
  }

  .fivePmStart {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 10;
  }

 //ends
  .eightAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 1;
  }

  .nineAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 2;
  }

  .tenAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 3;
  }

  .elevenAmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 4;
  }

  .twelvePmEnd  {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 5;
  }

  .onePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 6;
  }

  .twoPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 7;
  }

  .threePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 8;
  }

  .fourPmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 9;
  }

  .fivePmEnd {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-end: 10;
  }
</style>
