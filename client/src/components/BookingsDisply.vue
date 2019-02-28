<template lang="html">

  <div class="bookings-wrapper">
    <div class="checkedin-wrapper">
      <h1>Booked in</h1>
    <booking
        v-for="(booking, index) in bookings"
        :key="index"
        :booking="booking" v-if="booking.checked_in"></booking>
    </div>
    <div class="checkedout-wrapper">
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
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id == id)
      this.bookings.splice(index, 1)
    })

    // eventBus.$on('booking-updated', (id) => {
    //   // let index = this.bookings.findIndex(booking => booking._id == id)
    //   // this.booking.checked_in
    // })
  },
  components: {
    Booking
  }

}
</script>

<style lang="css" scoped>

.bookings-wrapper {
  margin-top: 20px;
  padding-bottom: 20px;
  background-color: #5366B5;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}

.bookings-wrapper h1{
  text-align: center;
  margin-bottom: 10px;
}

.checkedin-wrapper {
  margin-right: 3vw;

}

.checkedout-wrapper {
  margin-left: 3vw;
}


</style>
