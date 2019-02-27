<template lang="html">
  <div class="bookings-wrapper">
    <booking
        v-for="(booking, index) in bookings"
        :key="index"
        :booking="booking"></booking>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import Booking from './Booking.vue'
export default {
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    fetch("http://localhost:3000/api/bookings")
    .then(res => res.json())
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(game)
    })
  },
  components: {
    Booking
  }

}
</script>

<style lang="css" scoped>
</style>
