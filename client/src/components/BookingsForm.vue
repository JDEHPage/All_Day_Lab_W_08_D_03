<template lang="html">
  <form class="booking-input" v-on:submit.prevent="addBooking" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" v-model="surname" required>

    <label for="email">E-mail:</label>
    <input type="text" id="email" v-model="email" required>

    <label for="email">Status:</label>
    <input type="checkbox" id="email" v-model="checked_in" >


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
    checked_in: false
    }
  },
  methods: {
    addBooking(form){
      form.preventDefault()
    if(this.name === '') return;
    const booking = {
      name: this.name,
    surname: this.surname,
    email: this.email,
    checked_in: this.checked_in
    }
    fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(newBooking => eventBus.$emit('booking-added', newBooking))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
