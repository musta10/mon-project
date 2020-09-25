<template>
  <div>
      <form @submit.prevent="add">
    <p>{{msg}}</p>
  <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" v-model="name" placeholder="Enter Your Name" class="form-control" id="name">
    <label for="exampleInputEmail1">Email Adresse:</label>
    <input type="email" v-model="email" class="form-control" id="exampleEmail" placeholder="Enter Your Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" v-model="password" class="form-control" id="examplePassword" placeholder="Enter Your Password">
  </div>
  <button type="submit" class="btn btn-primary">Sign-UP</button>
</form>
  </div>
</template>


<script>

import axios from 'axios';

export default {
  name: "SignUPForm",
  data() {
      return {
          name: '',
          email: '',
          password: '',
          msg: ''
      }
  },
  methods: {
   async add() {
      await axios.post('http://localhost:3000/sign-up',{
        name: this.name,
        email: this.email,
        password: this.password
      })
      
      this.msg = 'you have been registred go Sign-in now'

      this.name = ''
      this.email = ''
      this.password = ''

  }

  }

}; 

</script>

<style scoped>
</style>