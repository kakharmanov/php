<template>
	<div class="container line-around py-6 px-5">
			
		<div class="has-text-right has-text-centered-mobile py-4">
			<a class="button is-danger is-light" @click="show_create_modal=!show_create_modal">Добавить</a>
		</div>

		<table>
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Имя</th>
				<!-- <th scope="col">Сотрудник</th> -->
				<th scope="col">Почта</th>
				<th scope="col">Статус</th>
				<th scope="col">Действия</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(userList, index) in userLists" :key="index">
				<td data-label="ID">{{userList.id}}</td>
				<td data-label="Фото">{{userList.name}}</td>
				<!-- <td data-label="Сотрудник">{{userList.name}}</td> -->
				<td data-label="Почта">{{userList.email}}</td>
				<td data-label="Статус">{{userList.admin}}</td>
				<td data-label="Действие">
					<button class="button is-danger is-small" @click="show_warning_modal=!show_warning_modal">Удалить</button>
					
					<div v-if="show_warning_modal">
						<div class="modal is-active">
							<div class="modal-background"></div>
							<div class="modal-content">
							<div class=" my-6 px-3">
							<WarningModal @closeModal="CloseModal"></WarningModal>
						</div>
					</div>

				<button class="modal-close is-large" aria-label="close" @click="show_warning_modal=false"></button> 
			
					</div>
				</div>
				</td>
			</tr>
		</tbody>
		</table>

		
	<div>
		
	</div>
		<div v-if="show_create_modal">
			<div class="modal is-active">
				<div class="modal-background"></div>
				<div class="modal-content">
					<div class=" my-6 px-3">
						<NewStaff @closeModal="CloseModalFromChild"></NewStaff>
					</div>
				</div>
				<button class="modal-close is-large" aria-label="close" @click="show_create_modal=false"></button> 
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios';
import NewStaff from '../components/NewStaff.vue'
import WarningModal from '../components/Warning_modal.vue'

export default ({
	components:{
		NewStaff,
		WarningModal
	},
	data() {
		return {
			show_create_modal: false,
			show_warning_modal:false,
			id:null,
			email:null,
			message: null,
			user:null,
			userLists:[],
			showPass:false
		}
	},
	beforeMount(){
    this.GettingUser()
 	},
	methods:{
		async GettingUser(){      
			await axios.get('admin/users').then((response) =>{
				this.userLists = response.data;
			});
		},

		async CloseModalFromChild(){
			await this.GettingUser();
			this.show_create_modal = false;
		},
		
		CloseModal(){
			this.show_warning_modal = false;
		}
  	}
})
</script>


<style>

.taginput .taginput-container.is-focusable, .textarea, .input {
	box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
	max-width: 30%;
}

@media screen and (max-width:768px){
	
	.taginput .taginput-container.is-focusable, .textarea, .input {
		box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
		max-width: 80%;
	}
} 


.searchStaff{
	width: 150px;
}

.searchStaffIcon{
	font-size: 20px;
	color:black;
}

.modal-content{
	background-color: white;
	border-radius: 25px;
}

.effectsIconSearch i:hover{
	border-bottom: 3px solid red;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
	content: attr(data-label);
	float: left;
	font-weight: bold;
	text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
 
}

</style>

<style scoped>

 .modal .modal-content {
	width: 35%;
  }

@media screen and (max-width:768px){
	
	table td:not([align]), table th:not([align]) {
		text-align: right;
	}
	.modal .modal-content {
		width: 90%;
  	}
} 
</style>