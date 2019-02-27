<template lang="html">
  <div class="bookings-card">
    <h4>Guest: {{ booking.name }} {{ booking.surname }}</h4>
    <p>E-mail: {{ booking.email }}</p>
    <!-- <p>Status: {{ booking.checked_in }}</p> -->
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
   
   border: 1px solid black;
   border-radius: 5px;
   padding: 20px;
   margin: 10px;
 }

 .delete-btn {
   width: 30px;
   height: 30px;
   background-size: 30px;
   border: none;
   padding: 0;
   border-radius:
 }
</style>
