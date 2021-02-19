<template>
  
<div class="container">
  <div class="question">
  <h1>Question {{id}}</h1>
  </div>
  <div class="code-area">
   <textarea rows="20" class="input" id="code" autofocus>def solution(arr):</textarea>
 <br/><br/>
<button>RUN TESTS</button>
<br/><br/>
<span id="results"></span>
 
 
  </div>
</div>


</template>

<script>

export default {
async asyncData({ params }) {
      const id = params.test1
      return { id }
    }
}
</script>

<style>
 @import '~/assets/css/code/main.css'; 
</style>