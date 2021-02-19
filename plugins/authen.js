
export default {


    beforeCreate(){
    
    var token
         token = this.$cookies.get('token');
        // If the user is not authenticated
        if (!token) {
        
            this.$router.push("authen/login")
    
    
    }
}}