<template>
   <div class="container">
   	<Menubar :model="items">
         
			<template #start>

				<router-link to="/reports">
					<img
						alt="logo"
						src="../assets/logo/logo.svg"
						height="40"
						class="p-mr-2"
					/>
				</router-link>

			</template>
					
   	</Menubar>
   </div>
</template>

<script>

export default {
	
   data() {
      return {
				name:'',
            items: [
					{
						label:'Отчеты',
						icon:'pi pi-fw pi-file',
						to: '/reports'
					},
					{
						label:'Статистика',
						icon:'pi pi-chart-bar',
						to:'/statistics'
					},
					{
						label:'Сотрудники',
						icon:'pi pi-users',
						to:'/staff'
					},
					{
						label: null,
						icon:'pi pi-fw pi-user',
						items:[
							{
								label:'Редактировать',
								icon:'pi pi-user-edit', 
							},
							{
								label:'Выход',
								icon:'pi pi-fw pi-power-off',
								to:'/logout'
							}
						]
               }
                
            ]
				
        }
		 
   },
	created(){
		this.items[3].label = localStorage.getItem('email');
	},
}
	
</script>

<style>

	.routerLink{
   	text-decoration: none !important
	}

	@media (max-width: 960px) {
		.buttonExit{
			display: none
		}
	}
	
</style>