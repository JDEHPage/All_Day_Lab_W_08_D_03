<template lang="html">
  <div class="from-cover">
  <h2>HOTEL AT THE END OF THE WORLD</h2>
  <form class="booking-input" v-on:submit.prevent="addBooking" method="post">

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" v-model="surname" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" v-model="email" required>

    <span>
    <label for="checked_in">Status:</label>
    <input type="checkbox" id="checked_in" v-model="checked_in" >

    <input id="save" type="submit" name="save" value="Save">
    </span>
  </form>
</div>
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
    .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>


.from-cover {
  background-color: #003F91;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}
.from-cover h2{
  padding-top: 15px;
  margin-top: 0px;
  color: white;

}


form {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  margin: 0px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: #5DA9E9;
}

input {
  margin: 0.2em 1.5em 0.2em 0.4em;
}

</style>
