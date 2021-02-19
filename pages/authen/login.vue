<template>
 <div>
{{authStatus}}
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     
     <button type="submit">Login</button>
     <nuxt-link to="register">Register</nuxt-link>
   </form>



 </div>
</template> 

<script>
 import { mapGetters } from 'vuex'
 export default {
 
 computed: mapGetters({
   authStatus:'authentication/authStatus'
 
  }),
beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (token) {
    
        this.$router.push("/")


}
}
 ,
    data(){
      return {
        email : "",
        password : ""
      }
    },

 methods: {
    
     async login ({axios}) {
      let email = this.email
        let password = this.password
        this.$store.dispatch('authentication/login', {email, password} )
       .then(() =>
       
       this.$router.push('/'))
       .catch(err => console.log(  err )
       
       )
  }
  }
 }
</script>