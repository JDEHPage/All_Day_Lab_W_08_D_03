<template>
  <div id="app">
    <bookings-form></bookings-form>
    <bookings-disply></bookings-disply>
  </div>
</template>

<script>
import { eventBus } from './main';

import BookingsForm from './components/BookingsForm';
import BookingsDisply from './components/BookingsDisply';


export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    BookingsForm,
    BookingsDisply,
  }
}
</script>

<style>

</style>
