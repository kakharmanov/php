<template>
  <div id="app">
    
    <div class="header">

    <form action="/login" method="post" @submit.prevent="loginAttempt">
      <h5 class="p-text-center containerMessage">
        Журнал учетов
        <Message severity="error" v-if="message">{{message}}</Message>
      </h5>
      
      <div class="p-grid">
        <div class="p-col-12 p-d-flex p-ai-center p-jc-center">
          <div class="p-fluid card">
            
            <div class="p-field">
              <label for="email">Логин</label>
              <input class="p-inputtext p-component" type="email" placeholder="email"  v-model="email">
            </div>
            
            <div class="p-field">
              <label for="password">Пароль</label>
              <input class="p-inputtext p-component" type="password" placeholder="Password" v-model="password">
            </div>
            
            <Button label="Войти" class="p-button-danger" type="submit" />
            
            </div>
          </div>
      </div>
    </form>

    </div>
   
    <router-view/>    
  </div>
	    
</template>


<script>
import axios from 'axios';
import Message from 'primevue/message';

  export default {
    components:{
      Message
    },
    data(){
      return{
        email: null,
        password: null,
        message: null,
      }

    },
    methods: {
      async loginAttempt() {
        await axios.post('login', {
          Email: this.email,
          Password: this.password
      })
      .then(response => {
          localStorage.setItem('token', response.data.api_token)
          axios.defaults.headers.common['Authorization'] = `Barrier ${response.data.api_token}`
          this.$root.email = response.data.email
          this.$router.push('/reports')
      })
      .catch (error => {
        if (error.response) {
          if(error.response.status == 401) {
            this.message = 'неверный логин или пароль'
          } else {
            this.message = 'неизвестная ошибка'
          }
        } else if (error.request) {
          this.message = 'сервер недоступен'
        } else {
          this.message = 'ошибка в ДНК разраба'
        }
      });            
    }
   }
  }

</script>

<style>

  .header{
    margin-top:150px;
  }
  .card{
    border: 1px solid #E5E5E5;
    padding:30px;
    border-radius: 7px;
  }
  .containerMessage{
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
</style>