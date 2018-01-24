<template>
  <div class="main">
    <h4>New Appointment for </h4>
    <input class="time" v-model="contactTime" placeholder="best time to contact"></input>
    <select class="typeSelect" v-model="type">
      <option value="service">Service</option>
      <option value="replacement">Replacement</option>
      <option value="maintenance">Annual Maintenance</option>
    </select>
    <input class="message" v-model="message" placeholder="Message"></input>
    <div v-on:click="appointmentSave" class="save">Save</div>
    <div class="success" v-if="success"></div>
    <div class="error" v-else-if="error"></div>
    <div v-on:click="cancel" class="cancel">Cancel</div>
  </div>
</template>

<script>
  export default {
    name: 'appointmentSet',
    props: ['appointmentProp', 'editable'],
    data: function () {
      return {
        timeStartSelect: 'twelveAm',
        timeEndSelect: 'twelveAm',
        selected: 'personal',
        title: '',
        description: '',
        edit: false,
        editToggle: false,
        appointment: [{
          name: '',
          contactTime: '',
          customerType: '',
          timeStart: '',
          timeEnd: '',
          date: '',
          type: '',
          message: ''
        }],
        newAppointments: [{ timeStart: 'twelveAm', timeEnd: 'twelveAm', title: '', description: '', type: 'personal' }]
      }
    },
    created () {
      if (this.appointmentProp !== null) {
        this.appointment.push(this.appointmentProp)
      }
      if (this.editable !== null) {
        this.edit = this.editable
      }
    },
    methods: {
      appointmentSave: function () {
        this.newAppointments[0].timeStart = this.timeStartSelect
        this.newAppointments[0].timeEnd = this.timeEndSelect
        this.newAppointments[0].type = this.selected
        this.newAppointments[0].title = this.title
        this.newAppointments[0].description = this.description
        this.$emit('saveAppointment', this.newAppointments[0])
      },
      appointmentSaveEdit: function () {
        this.$emit('editAppointment', this.appointment[0])
        this.editToggle = false
      },
      newAppointment: function () {
        this.edit = false
      },
      cancel: function () {
        this.$emit('backAppointment')
      }
    }
  }
</script>

<style scoped lang="less">
  @yellow: #f4c20d;

  .main {
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 30px repeat(14, 30px);
    background-color: #667;
  }

  // newAppointment
  .appointmentNew {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
  }

  h4 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .time {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .timeStart {
    grid-column: 1;
    grid-row: 3;
    margin-right: 5px;
  }

  .timeEnd {
    grid-column: 2;
    grid-row: 3;
    margin-right: 5px;
  }

  .typeSelect {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .title {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 4;
  }

  .message {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 7;
    grid-row-end: 9;
  }

  input::placeholder {
    line-height: 1em;
  }

  .appointmentSave {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 9;
    grid-row-end: 9;
    text-align: center;
    background-color: @yellow;
    border-radius: 6px;
    margin-right: 15px;
  }

  .cancel {
    grid-column: 2;
    grid-row: 9;
    text-align: center;
    background-color: #FF0000;
    border-radius: 6px;
    margin-right: 15px;
  }

  // view appointment
  .appointmentView {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
  }

  .timeStartView {
    grid-column: 1;
    grid-row: 3;
  }

  .timeEndView {
    grid-column: 2;
    grid-row: 3;
  }

  .typeView {
    grid-column: 3;
    grid-row: 3;
  }

  .descriptionView {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 7;
    background-color: white;
  }

  .new {
    grid-column: 1;
    grid-row: 7;
    text-align: center;
    background-color: blue;
    border-radius: 6px;
    margin-right: 15px;
  }

  .edit {
    grid-column: 2;
    grid-row: 7;
    text-align: center;
    background-color: green;
    border-radius: 6px;
    margin-right: 15px;
  }

  .backView {
    grid-column: 3;
    grid-row: 7;
    text-align: center;
    background-color: #FF0000;
    border-radius: 6px;
    margin-right: 15px;
  }

  // edit appointment
  .appointmentEdit {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
  }

  .timeStartEdit {
    grid-column: 1;
    grid-row: 3;
  }

  .timeEndEdit {
    grid-column: 2;
    grid-row: 3;
  }

  .typeEdit {
    grid-column: 3;
    grid-row: 3;
  }

  .titleEdit {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 3;
  }

  .descriptionEdit {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 7;
    background-color: white;
  }

  .save {
    grid-column: 1;
    grid-row: 9;
    text-align: center;
    background-color: @yellow;
    border-radius: 6px;
    margin-right: 15px;
  }

  .backEdit {
    grid-column: 3;
    grid-row: 7;
    text-align: center;
    background-color: #FF0000;
    border-radius: 6px;
    margin-right: 15px;
  }
</style>
