<template lang="html">

  <div class="bookings-wrapper">
    <div class="">
      <h1>Booked in</h1>
    <booking
        v-for="(booking, index) in bookings"
        :key="index"
        :booking="booking" v-if="booking.checked_in"></booking>
    </div>
    <div class="">
      <h1>Not-Booked in</h1>
    <booking
        v-for="(booking, index) in bookings"
        :key="index"
        :booking="booking" v-if="!booking.checked_in"></booking>
  </div>
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

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id == id)
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-updated', (id) => {
      // let index = this.bookings.findIndex(booking => booking._id == id)
      // this.booking.checked_in
    })
  },
  components: {
    Booking
  }

}
</script>

<style lang="css" scoped>

.bookings-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
