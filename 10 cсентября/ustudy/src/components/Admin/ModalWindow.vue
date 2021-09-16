<template>
    <section>
      <button class="mt-5 button is-normal addbutton" @click="isOpen=!isOpen">
        Добавить
		<i class="plus-icon fas fa-plus"></i>
      </button>
      <template v-if="isOpen">
           <div class="modal is-active columns is-mobile">
            <div class="modal-background" @click="isOpen=!isOpen"></div>
            <div class="modal-content">
                <div class="modal-content-issue has-background-white">
                   <div class="modal-content-inner has-text-centered px-3 py-3">

                    <div>     
                        <p class="my-5">Добавление пользователя</p>
                        <input class="input mb-3" type="text" placeholder="Имя">
                        <input class="input mb-3" type="text" placeholder="Фамилия">
                        <input class="input mb-3" type="text" placeholder="Отчетство">
                        <input class="input mb-3" type="text" placeholder="+7 701 123 45 67">
                        <input class="input mb-3" type="text" placeholder="mail@example.com">
                        <div class="select mb-3">
                            <select>
                                <option selected>Роль</option>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                        <p class="mb-3">Загрузить фотографию</p>
                        
                        <div class="file mb-3">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume">
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                                </span>
                            </label>
                        </div>
                        </div>
                        <div>
                            <button class="button mr-5" @click="isOpen=!isOpen">Отменить</button>
                            <button class="button">Сохранить</button> 
                        </div>
                   </div>
               </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
      </template>
       
    </section>
</template>

<script>
    export default {
        components:{
            
        },
        data(){
            return{
                isOpen:false
            }
        },
        methods: {
           
        }
    }
</script>

<style>
	.addbutton {
		position: relative !important;
	}
	.addbutton {
		padding-left: 2em !important;
		background-color:#F5F5F5 !important;
		border: none!important;
		border-radius: 0px !important;
		color:#1E1919 !important;
	}
	.plus-icon{
		position: absolute;
		top: 30%;
		left: 10%;
		font-size:15px;
	}
    .modal-content-issue{
        margin: 0 auto;
        width: 400px;
        height: 560px;
    }
</style>