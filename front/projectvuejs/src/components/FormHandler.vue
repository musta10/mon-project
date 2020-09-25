<template>
      <div>
    <b-tabs card>
      <b-tab title="sign-UP" active>
         <SignUpForm/>
      </b-tab>
      <b-tab title="sign-IN">
          <SignInForm/>
      </b-tab>
    </b-tabs>
</div>
</template>
 

<script>
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'


export default {
    name: 'FormHandler',
    components: {
        SignUpForm,
        SignInForm
    }
}


</script>

<style scoped>

</style>

