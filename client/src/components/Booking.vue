<template lang="html">
  <div class="booking-card">
    <h4>Guest: {{ booking.name }} {{ booking.surname }}</h4>
    <p>E-mail: {{ booking.email }}</p>
    <!-- <p>Status: {{ booking.checked_in }}</p> -->
    <!-- <label for="checked_in">Status:</label>
    <input type="checkbox" id="checked_in" v-model="booking.checked_in" > -->

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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
