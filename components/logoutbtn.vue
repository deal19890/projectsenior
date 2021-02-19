<template>
<div>
  <h3 v-if="!isLoggedIn"> <!-- !isLoggedIn = user already login -->
  <button @click="logout"> Logout</button>
</h3>

</div>
</template>
<script>
export default {
  methods:{
    logout(){
   
  this.$store.dispatch('authentication/logout' )
       .then(() =>
       
       this.$router.push('/authen/login'))
    }
  }
}
</script>
