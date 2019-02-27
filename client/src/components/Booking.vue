<template lang="html">
  <div class="booking-card">
    <h3>Guest Name: {{ booking.name }}</h3>
    <p>Guest Surname: {{ booking.playingTime }}</p>
    <p>Players: {{ booking.players.min}} - {{ booking.players.max }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteGame"></button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {

}
</script>

<style lang="css" scoped>
</style>
