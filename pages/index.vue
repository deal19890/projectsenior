<template>
<div>
  {{user}}
    {{isLoggedIn}} 
 <h1> Index Page</h1>
<logoutbtn/>

</div>


<!-- https://www.youtube.com/watch?v=Vd1YwbHrY1Q&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY -->



</template>

<script>
import { mapGetters,mapActions } from 'vuex'


export default {


beforeCreate(){

var token
     token = this.$cookies.get('token');
    // If the user is not authenticated
    if (!token) {
    
        this.$router.push("authen/login")


}
}
  ,
data(){
return {
    form:{
        email:'',password:''
    }
}
},
  computed: mapGetters({
   user:'authentication/get',isLoggedIn:'authentication/isLoggedIn'
 
  }),
  methods: {
...mapActions({
signIn:'authentication/signIn'
}),
      submit(){
          
this.signIn(this.form)
  
      },gettoken(){
     alert(window.sessionStorage.getItem("token"))
      }
  }
}
</script>

<style>

</style>