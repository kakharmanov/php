<template>
	  <div>
    
    <div class="columns">
        <div class="column"></div>
        
        <div class="column is-one-quarter line-around my-6 px-6">
        <h3 class="has-text-weight-medium is-size-4 my-5 has-text-centered">Восстановление пароля</h3>
		  <p class="is-size-6 has-text-centered my-4">
			  Для восстановления пароля введите Ваш адрес электронной почты и нажмите “Отправить”
			  <br><br>На указанный адрес электронной почты будет отправленно письмо с инструкцией 
			  по сбросу пароля.
			</p>
        <form action="/login" method="post" @submit.prevent="loginAttempt">
        <!-- <h2 class="notification is-danger" v-if="message">{{message}}</h2> -->
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <span class="is-size-7 has-text-left">Логин</span>
              <input class="input" type="email" placeholder="Email" v-model="email">
            </p>
          </div>
          
          <div class="has-text-centered mt-5">
            <button class="button is-danger" native-type="submit">ОТПРАВИТЬ</button>
          </div>
			 <div class="has-text-centered">
            <router-link class="is-size-7" to="/login">Войти</router-link>
          </div>
        </form> 
        </div>
        
        <div class="column"></div>
    </div>
    
  </div> 
</template>

<script>
import axios from 'axios'

export default({
  nama:'forgot',
  data(){
    return{
      email:''
    }
  },
  methods:{
    async loginAttempt(){
      const response = await axios.post('forgot', {
        email:this.email
      });
      console.log(response);
    }
  }
  
})
</script>

