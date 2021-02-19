export default {
    get (state) {
      return state.user
    }
    ,  isLoggedIn(state){
   
  //  state.token=window.localStorage.getItem("token");

      return state.token
    }
   ,authStatus(state){
   return state.status
   }
  }
  