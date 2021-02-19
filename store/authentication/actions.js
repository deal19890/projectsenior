import axios from 'axios'


export default {

 async login({commit}, user ){
  
    return new Promise((resolve, reject) => {
      // commit('auth_request')
      axios({url: 'http://127.0.0.1:8000/token', data: user, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
        console.log(resp)
         const token = resp.data.accesstoken
       
     

           this.$cookies.set('token',token, {
            path: '/',
            maxAge: 60*60      
          })
          

         commit('auth_success', user.email)
         commit('sttoken',token)
        
        resolve(resp)
    
      })
      .catch(err => {
       
        if(err=401){
          commit('auth_error',"Please Check your account")
        }
         reject(err)
     
      })
    })
},

async register({commit}, user){
    return new Promise((resolve, reject) => {
   
     axios({url: 'http://127.0.0.1:8000/users', data: user, method: 'POST', headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(resp => {
        
        const user = resp.data.user
   

     console.log(resp)
        resolve(resp)
      })
      .catch(err => {
        if(err=400){
          commit('auth_error',"email alredy registered")
        }
      
       
        reject(err)
      })
    })
  },

  async logout({commit}){
    return new Promise((resolve, reject) => {
      this.$cookies.remove('token')
      commit('logout')
    
      
      resolve()
    })
  
  
  
}
, settoken({commit},token){
commit('sttoken',token)

}
}