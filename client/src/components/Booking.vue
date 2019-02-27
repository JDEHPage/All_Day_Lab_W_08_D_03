<template lang="html">
  <div class="bookings-card">
    <h4>Guest: {{ booking.name }} {{ booking.surname }}</h4>
    <p>E-mail: {{ booking.email }}</p>
    <label for="checked_in">Status:</label>
    <input type="checkbox" id="checked_in" v-model="booking.checked_in" v-on:change="changeStatus">

    <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  props: ['booking'],
  methods: {
    deleteBooking(){
      fetch('http://localhost:3000/api/bookings/' + this.booking._id, {
        method: 'DELETE'
      })
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },

    changeStatus(){
      fetch('http://localhost:3000/api/bookings/' + this.booking._id, {
        method: 'PUT',
        body: JSON.stringify(this.booking),
        headers: { 'Content-Type': 'application/json'}
      })
      }
    }
}
</script>

<style lang="css" scoped>
 .bookings-card {
   background-color: #FFFFFF;
   /* box-sizing: border-box; */
   max-width: 180px;
   max-height: 180px;
   border: 1px solid black;
   border-radius: 5px;
   padding: 20px;
   margin: 10px;
 }

 .bookings-card h4{
   margin-top: 0px;
 }

 .delete-btn {

   background-size: 30px;
   border: ;

   border-radius:
 }
</style>
