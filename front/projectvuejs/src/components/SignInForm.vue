<template>
    <div>
         <form @submit.prevent="postin">
  <div class="form-group">
    <label  for="exampleInputEmail1">Email Adresse:</label>
    <input type="email" v-model="email" class="form-control" id="exampleEmail" placeholder="Enter Your Email">
  </div>
  <div class="form-group">
    <label  for="exampleInputPassword1">Password:</label>
    <input type="password" v-model="password" class="form-control" id="examplePassword" placeholder="Enter Your Password">
  </div>
  <p class="red" v-if="connect">You are not registered</p>
  <button type="submit" class="btn btn-primary">Sign-IN</button>
</form>
    </div>
</template>




<script>
import Axios from 'axios'
export default {
    name: 'SignINForm',
    data() {
      return {
        email: '',
        password: '',
        connect: false
      }
    },
    methods: {
    async  postin() {
      await Axios.post('http://localhost:3000/sign-in', {
            email: this.email,
            password: this.password
        })
        .then(reponse => {
          console.log(reponse)
          this.email = ''
          this.password = ''
        
          this.$router.push('/dashboard')
          //if (reponse.status == 812) {
            //this.connect = true
          //} else {
          
          //}
        })
        .catch(err => {
          this.connect = true;
          console.log(err)
        })
        /*console.log(reponse);
        this.email = ''
        this.password = ''
        

        if (reponse.status == 812) {
            this.connect = true
        } else {
          this.$router.push('/dashboard')
        }*/

      }

    }

}
</script>

<style scoped>
.red {
  color: red;
}


</style>