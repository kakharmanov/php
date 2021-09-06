<template>
	<div class="container login">
		
		<h2>Страница Сотрудников</h2>
		
		<div class="p-text-right p-mb-1">
			<NewUser  @UpdateList="GettingUser()"/>
		</div>
		 
		<DataTable :value="userLists" responsiveLayout="stack" >
			<Column field="id" header="Code"></Column>
			<Column field="name" header="Name"> </Column>
			<Column field="email" header="Category"></Column>
			<Column headerStyle="width: 8em" bodyStyle="text-align: center">
				<template #header>
					<p>Действие</p>
				</template>
				<template #body>
					<WarningModal></WarningModal>
				</template>
			</Column>
      </DataTable>  

	</div>
</template>

<script>
import axios from 'axios'
import NewUser from '../components/NewUser.vue'
import WarningModal from '../components/WarningModal.vue'

export default ({
	components:{
		NewUser,
		WarningModal
	},
	data() {
		return {
			id:null,
			email:null,
			message: null,
			user:null,
			userLists:null,
			displayModal: false,
			openModal:false
		}
		
	},
	beforeMount(){
    this.GettingUser()
 	},
	methods:{
		async GettingUser(){      
			await axios.get('admin/users').then((response) =>{
				this.userLists = response.data
			});
		}
  }

})

</script>
 
 