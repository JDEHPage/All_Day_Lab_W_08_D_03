<template lang="html">
  <form class="booking-input" v-on:submit.prevent="addBooking" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" v-model="surname" required>

    <label for="email">E-mail:</label>
    <input type="text" id="email" v-model="email" required>

    <b-form-checkbox id="checkbox1" v-model="checked_in" value="true" unchecked-value="false">
      I accept the terms and use
    </b-form-checkbox>


    <input type="submit" name="save" value="Save">

  </form>
</template>

<script>
export default {
  data(){
    return{
      name: "",
    surname: "",
    email: "",
    checked_in: "false"
    }
  },
  methods: {
    addBooking(form){
      form.preventDefault()
    if(this.name === '') return;
    const booking = {
      name: "",
    surname: "",
    email: "",
    checked_in: "false"
    }
    fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
