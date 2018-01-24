<template>
  <div class="main">
    <day class="day" v-if="dayClicked" v-on:backDay="backDay" v-on:nextDay="nextDay" v-on:calendar="calendar" :monthDay="this.months[this.monthNum].month" :dayNum="this.dayNum" :yearNum="this.year" :appointmentsProp="this.appointment"></day>
    <appointmentSet class="appointmentSet" v-else-if="appointmentShow" v-on:saveAppointment="newAppointment" v-on:backAppointment="hideAppointment"></appointmentSet>
    <div class="newAppointmentState" v-else>
      <div class="month">
        <div class="monthName">{{month.month}}</div>
        <div class="prev" v-on:click="previous">&#10094;</div>
        <div class="next" v-on:click="next">&#10095;</div>
        <div class="year">{{ this.year }}</div>
      </div>
      <div class="weekdays">
        <div class="monday">Mo</div>
        <div class="tuesday">Tu</div>
        <div class="wednesday">We</div>
        <div class="thursday">Th</div>
        <div class="friday">Fr</div>
        <div class="saturday">Sa</div>
        <div class="sunday">Su</div>
      </div>
      <ul class="days">
        <li v-on:click="dayNum = monday.day; dayClicked = true" v-bind:class="{'mondayCol': true, 'rowOne': monday.row === 1, 'rowTwo': monday.row === 2, 'rowThree': monday.row === 3, 'rowFour': monday.row === 4, 'rowFive': monday.row === 5, 'rowSix': monday.row === 6}" v-for="monday in mondays">{{monday.day}}</li>
        <li v-on:click="dayNum = tuesday.day; dayClicked = true" v-bind:class="{'tuesdayCol': true, 'rowOne': tuesday.row === 1, 'rowTwo': tuesday.row === 2, 'rowThree': tuesday.row === 3, 'rowFour': tuesday.row === 4, 'rowFive': tuesday.row === 5, 'rowSix': tuesday.row === 6}" v-for="tuesday in tuesdays">{{tuesday.day}}</li>
        <li v-on:click="dayNum = wednesday.day; dayClicked = true" v-bind:class="{'wednesdayCol': true, 'rowOne': wednesday.row === 1, 'rowTwo': wednesday.row === 2, 'rowThree': wednesday.row === 3, 'rowFour': wednesday.row === 4, 'rowFive': wednesday.row === 5, 'rowSix': wednesday.row === 6}" v-for="wednesday in wednesdays">{{wednesday.day}}</li>
        <li v-on:click="dayNum = thursday.day; dayClicked = true" v-bind:class="{'thursdayCol': true, 'rowOne': thursday.row === 1, 'rowTwo': thursday.row === 2, 'rowThree': thursday.row === 3, 'rowFour': thursday.row === 4, 'rowFive': thursday.row === 5, 'rowSix': thursday.row === 6}" v-for="thursday in thursdays">{{thursday.day}}</li>
        <li v-on:click="dayNum = friday.day; dayClicked = true" v-bind:class="{'fridayCol': true, 'rowOne': friday.row === 1, 'rowTwo': friday.row === 2, 'rowThree': friday.row === 3, 'rowFour': friday.row === 4, 'rowFive': friday.row === 5, 'rowSix': friday.row === 6}" v-for="friday in fridays">{{friday.day}}</li>
        <li v-on:click="dayNum = saturday.day; dayClicked = true" v-bind:class="{'saturdayCol': true, 'rowOne': saturday.row === 1, 'rowTwo': saturday.row === 2, 'rowThree': saturday.row === 3, 'rowFour': saturday.row === 4, 'rowFive': saturday.row === 5, 'rowSix': saturday.row === 6}" v-for="saturday in saturdays">{{saturday.day}}</li>
        <li v-on:click="dayNum = sunday.day; dayClicked = true" v-bind:class="{'sundayCol': true, 'rowOne': sunday.row === 1, 'rowTwo': sunday.row === 2, 'rowThree': sunday.row === 3, 'rowFour': sunday.row === 4, 'rowFive': sunday.row === 5, 'rowSix': sunday.row === 6}" v-for="sunday in sundays">{{sunday.day}}</li>
      </ul>
      <div>{{ this.day }}</div>
      <div class="colorCode"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Day from './Day'
  import AppointmentSet from './AppointmentSet'

  export default {
    name: 'Schedule',
    components: {
      'appointmentSet': AppointmentSet,
      'day': Day
    },
    data () {
      return {
        assignState: false,
        months: [
          { monthNum: 0, month: 'January', days: 31, startingDay: 'sunday' },
          { monthNum: 1, month: 'Feburary', days: 28, startingDay: 'wednesday' }, // 29
          { monthNum: 2, month: 'March', days: 31, startingDay: 'wednesday' },
          { monthNum: 3, month: 'April', days: 30, startingDay: 'saturday' },
          { monthNum: 4, month: 'May', days: 31, startingDay: 'monday' },
          { monthNum: 5, month: 'June', days: 30, startingDay: 'thursday' },
          { monthNum: 6, month: 'July', days: 31, startingDay: 'saturday' },
          { monthNum: 7, month: 'August', days: 31, startingDay: 'tuesday' },
          { monthNum: 8, month: 'September', days: 30, startingDay: 'friday' },
          { monthNum: 9, month: 'October', days: 31, startingDay: 'sunday' },
          { monthNum: 10, month: 'November', days: 30, startingDay: 'wednesday' },
          { monthNum: 11, month: 'December', days: 31, startingDay: 'friday' }],
        appointments: [{}],
        appointment: [],
        activeAppointment: {
          name: '',
          contactTime: '',
          customerType: '',
          timeStart: '',
          timeEnd: '',
          date: '',
          type: '',
          message: ''
        },
        month: '',
        monthNum: 0,
        dayNum: 0,
        day: '',
        mondays: [],
        tuesdays: [],
        wednesdays: [],
        thursdays: [],
        fridays: [],
        saturdays: [],
        sundays: [],
        dayClicked: false,
        appointmentShow: false
      }
    },
    created () {
      let time = new Date()
      let vue = this
      vue.year = time.getFullYear()
      vue.monthNum = time.getMonth()
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    },
    methods: {
      appointmentsPopulate () {
        let vue = this
        axios.get('http://13.57.57.81:81/appointments' + vue.userId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
          .then(function (response) {
            vue.appointment.userId = response.data[0].userId
            vue.appointment.contactTime = response.data[0].contactTime
            vue.appointment.timeStart = response.data[0].timeStart
            vue.appointment.timeEnd = response.data[0].timeEnd
            vue.appointment.date = response.data[0].date
            vue.appointment.type = response.data[0].type
            vue.appointment.message = response.data[0].message
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      dayPopulate () {
        let vue = this
        let i = 0
        let rowNum = 1
        let dayString = vue.months[vue.monthNum].startingDay
        for (i = 0; i < vue.months[vue.monthNum].days; i++) {
          let dayNum = i + 1
          if (dayString === 'monday') {
            vue.mondays.push({ day: dayNum, row: rowNum })
            dayString = 'tuesday'
          }
          else if (dayString === 'tuesday') {
            vue.tuesdays.push({ day: dayNum, row: rowNum })
            dayString = 'wednesday'
          }
          else if (dayString === 'wednesday') {
            vue.wednesdays.push({ day: dayNum, row: rowNum })
            dayString = 'thursday'
          }
          else if (dayString === 'thursday') {
            vue.thursdays.push({ day: dayNum, row: rowNum })
            dayString = 'friday'
          }
          else if (dayString === 'friday') {
            vue.fridays.push({ day: dayNum, row: rowNum })
            dayString = 'saturday'
          }
          else if (dayString === 'saturday') {
            vue.saturdays.push({ day: dayNum, row: rowNum })
            dayString = 'sunday'
          }
          else if (dayString === 'sunday') {
            vue.sundays.push({ day: dayNum, row: rowNum })
            dayString = 'monday'
            rowNum++
          }
        }
      },
      dayClear () {
        let vue = this
        vue.mondays = []
        vue.tuesdays = []
        vue.wednesdays = []
        vue.thursdays = []
        vue.fridays = []
        vue.saturdays = []
        vue.sundays = []
      },
      monthCompute () {
        let vue = this
        if (vue.monthNum === vue.months[0].monthNum) {
          vue.month = vue.months[0]
        }
        else if (vue.monthNum === vue.months[1].monthNum) {
          vue.month = vue.months[1]
        }
        else if (vue.monthNum === vue.months[2].monthNum) {
          vue.month = vue.months[2]
        }
        else if (vue.monthNum === vue.months[3].monthNum) {
          vue.month = vue.months[3]
        }
        else if (vue.monthNum === vue.months[4].monthNum) {
          vue.month = vue.months[4]
        }
        else if (vue.monthNum === vue.months[5].monthNum) {
          vue.month = vue.months[5]
        }
        else if (vue.monthNum === vue.months[6].monthNum) {
          vue.month = vue.months[6]
        }
        else if (vue.monthNum === vue.months[7].monthNum) {
          vue.month = vue.months[7]
        }
        else if (vue.monthNum === vue.months[8].monthNum) {
          vue.month = vue.months[8]
        }
        else if (vue.monthNum === vue.months[9].monthNum) {
          vue.month = vue.months[9]
        }
        else if (vue.monthNum === vue.months[10].monthNum) {
          vue.month = vue.months[10]
        }
        else if (vue.monthNum === vue.months[11].monthNum) {
          vue.month = vue.months[11]
        }
      },
      previous () {
        let vue = this
        if (vue.monthNum > 0) {
          vue.monthNum--
        }
        else if (vue.monthNum === 0) {
          vue.monthNum = 11
          let x = vue.year - 2000
          if (x % 4 === 0) {
            vue.months[1].days = 29
            vue.drift(true, false)
          }
          else {
            vue.months[1].days = 28
            vue.drift(false, false)
          }
          vue.year--
        }
        vue.monthCompute()
        vue.dayClear()
        vue.dayPopulate()
      },
      next () {
        let vue = this
        if (vue.monthNum < 11) {
          vue.monthNum++
        }
        else if (vue.monthNum === 11) {
          vue.monthNum = 0
          vue.year++
          let x = vue.year - 2000
          if (x % 4 === 0) {
            vue.months[1].days = 29
            vue.drift(true, true)
          }
          else {
            vue.months[1].days = 28
            vue.drift(false, true)
          }
        }
        vue.monthCompute()
        vue.dayClear()
        vue.dayPopulate()
      },
      drift (x, y) {
        let vue = this
        let i = 0
        for (i = 0; i < 12; i++) {
          if (vue.months[i].startingDay === 'monday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'tuesday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'wednesday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'sunday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'saturday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'tuesday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'wednesday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'thursday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'monday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'sunday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'wednesday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'thursday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'friday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'tuesday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'monday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'thursday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'friday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'saturday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'wednesday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'tuesday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'friday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'saturday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'sunday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'thursday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'wednesday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'saturday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'sunday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'monday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'friday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'thursday'
              }
            }
          }
          else if (vue.months[i].startingDay === 'sunday') {
            if (y === true) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'monday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'tuesday'
              }
            }
            else if (y === false) {
              if (x === false || i < 2) {
                vue.months[i].startingDay = 'saturday'
              }
              else if (x === true && i > 1) {
                vue.months[i].startingDay = 'friday'
              }
            }
          }
        }
      },
      backDay () {
        let vue = this
        if (this.dayNum > 1) {
          this.dayNum--
        }
        else if (this.dayNum === 1) {
          vue.previous()
          this.dayNum = this.months[this.monthNum].days
        }
      },
      nextDay () {
        let vue = this
        if (this.dayNum === this.months[this.monthNum].days) {
          this.dayNum = 1
          vue.next()
        }
        else {
          this.dayNum++
        }
      },
      calendar () {
        this.dayClicked = false
      },
      newAppointment (appointment) {
        this.appointmentShow = false
        if (appointment !== null) {
          this.appointment.push(appointment)
        }
      },
      hideAppointment () {
        this.appointmentShow = false
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 4;
    font-family: Tahoma;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px repeat(6, 50px);
  }

  .day {
  }

  .appointmentSet {
  }

  .newAppointmentState {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .month {
    height: 200px;
    width: 100%;
    background: #f4c20d;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
  }

  .monthName {
    font-size: 2em;
    color: white;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  /* Month list */
  .month ul {
    margin: 0;
    padding: 0;
  }

  .month ul li {
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .year {
    color: white;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 2;
    text-align: center;
    font-size: 2em;
  }

  /* Previous button inside month header */
  .month .prev {
    color: white;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    padding-top: 10px;
  }

  /* Next button */
  .month .next {
    color: white;
    grid-column-start: 5;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
    padding-top: 10px;
  }

  .list {
    grid-column: 2;
    grid-row: 3;
    height: 100%;
    width: 100%;
  }

  .search {
    grid-column: 3;
    grid-row: 3;
    height: 100%;
    width: 100%;
  }

  .appointment {
    grid-column: 4;
    grid-row: 3;
    height: 100%;
    width: 100%;
  }

  /* Weekdays (Mon-Sun) */
  .weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .weekdays li {
    width: 13.6%;
    color: #667;
  }

  /* Days (1-31) */
  .days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .title {
    display: none;
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 1.5em;
  }

  .monday {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .tuesday {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .wednesday {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .thursday {
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .friday {
    grid-column-start: 5;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .saturday {
    grid-column-start: 6;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .sunday {
    grid-column-start: 7;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-left: 15px;
  }

  .mondayCol {
    grid-column: 1;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .tuesdayCol {
    grid-column: 2;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .wednesdayCol {
    grid-column: 3;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .thursdayCol {
    grid-column: 4;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .fridayCol {
    grid-column: 5;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .saturdayCol {
    grid-column: 6;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .sundayCol {
    grid-column: 7;
    width: 100%;
    text-align: center;
    font-size: 1em;
  }

  .rowOne {
    grid-row: 1;
  }

  .rowTwo {
    grid-row: 2;
  }

  .rowThree {
    grid-row: 3;
  }

  .rowFour {
    grid-row: 4;
  }

  .rowFive {
    grid-row: 5;
  }

  .rowSix {
    grid-row: 6;
  }

  .days li {
    list-style-type: none;
    text-align: center;
    margin-bottom: 5px;
    color:#777;
  }
  /* Highlight the "current" day */
  .days li .active {
    padding: 5px;
    background: #f4c20d;
    color: white !important
  }

  .colorCode {
    grid-column-start: ;
    grid-column-end: ;
    grid-row-start: ;
    grid-row-end: ;
    border-top: 5px;
    border-left: 5px;
    border-right: 5px;
    border-bottom: 5px;
  }

  .hidden {
    display: none;
  }

  @media (min-width: 700px) {
  }
</style>
