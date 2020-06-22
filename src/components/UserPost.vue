
<template>
  <div v-if="users && users.length" class="container-fluid p-5 row">
    <div v-for="user of users" class="card col-sm-12 col-md-6 col-lg-4 mr-0" >
      <p><strong>{{user.body}}</strong></p>
     

    </div>
  </div>

  <div v-else-if="errors && errors.length">
    <div v-for="error of errors">
      {{error.message}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      errors: []
    }

  },

  // Fetches users when the component is created.
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data
      console.log(this.users.body)
      
    })
    .catch(e => {
      this.errors.push(e)
    })

  
  }

}
</script>

<style>
  .card{
   background: #fff;
   box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
    border-radius: 12px;
   }
.cardob{
    margin: 1rem;
    background: white;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
    border-radius: 12px;
    overflow: hidden;
    transition: all .2s linear;
    flex: 1 1 calc(33% - 2rem) ;
    
  }
  .card:hover {
    box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
    transform: translate3D(0, -2px, 0);
  }
  
  @media screen and (min-width: $600px) {
    .card {
      flex: 1 1 calc(50% - 2rem);
    }
  }
  
@media screen and (min-width: 900px) {
    .card {
      flex: 1 1 calc(33% - 2rem) !;
    }
  }

  .card:nth-child(2n) h1 {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
  
  .card:nth-child(4n) h1 {
    background-image: linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%);
  }
  
  .card:nth-child(5n) h1 {
    background-image: linear-gradient(120deg, #ffc3a0 0%, #ffafbd 100%);
  }
  
</style>