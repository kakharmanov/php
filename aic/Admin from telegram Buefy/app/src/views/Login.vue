<template>
  <div>
    <div class="columns px-6 ">
        <div class="column"></div>
        
        <div class="column is-one-quarter line-around my-6 px-6 is-mobile">
        <h3 class="has-text-weight-medium is-size-4 my-5 has-text-centered">Журнал отчетов</h3>
        <form action="/login" method="post" @submit.prevent="loginAttempt">
          <h2 class="notification is-danger" v-if="message">{{message}}</h2>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <span class="is-size-7 has-text-left">Логин</span>
              <input class="input" type="email" placeholder="Email" v-model="email">
            </p>
          </div>

          <div class="field">
            <p class="control has-icons-left">
              <span class="is-size-7">Пароль</span>
              <input class="input" type="password" placeholder="Password"  v-model="password" >
            </p>
          </div>
          <div class="has-text-right">
            <!-- <router-link class="is-size-7" to="/forgot">Забыли пароль?</router-link> -->
          </div>
          <div class="has-text-centered mt-5">
            <button class="button is-danger" native-type="submit">ВОЙТИ</button>
          </div>
        </form> 
        </div>
        
        <div class="column"></div>
    </div>
    
  </div> 
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      password: null,
      message: null
    }
  },
  methods: {
      async loginAttempt() {
        await axios.post('login', {
          Email: this.email,
          Password: this.password
      })
      .then(response => {
          localStorage.setItem('token', response.data.api_token);
          axios.defaults.headers.common['Authorization'] = `Barrier ${response.data.api_token}`;
          this.$root.user.email = response.data.email;
          this.$router.push('/admin/reports');
      })
      .catch (error => {
        if (error.response) {
          if(error.response.status == 401) {
            this.message = 'неверный логин или пароль';
          } else {
            this.message = 'неизвестная ошибка';
          }
        } else if (error.request) {
          this.message = 'сервер недоступен';
        } else {
          this.message = 'ошибка в ДНК разраба';
        }
          console.log(error);
    });            
            
    }
  }
}
</script>

<style>

  .line-around{
    border: 1px solid #E5E5E5;
    border-radius: 10px;
  }

  .position{
    margin:o auto;
  }

</style>