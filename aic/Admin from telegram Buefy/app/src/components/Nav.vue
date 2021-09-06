<template>
	<nav class="navbar container" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link to="/admin/reports">
				<img src="../assets/logo/logo.svg">
			</router-link>
			
			<template v-if="$route.name !='Login'">
				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</template>
			
			<template v-else>
				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"></a>
			</template>
			
		</div>

		<div id="navbarBasicExample" class="navbar-menu has-text-centered-mobile">
			<div class="navbar-end" v-if="$route.name !='Reset' && $route.name !='Login' && $route.name !='Forgot'">
				
				<div class="navbar-item">
					<router-link class="styleOftext" to="/admin/reports">Отчеты</router-link>
				</div>

				<div class="navbar-item">
					<router-link class="styleOftext" to="/admin/statistics" >Статистика</router-link>
				</div>

				<div class="navbar-item">
					<router-link class="styleOftext" to="/admin/staff">Сотрудники</router-link>
				</div>
				
				<div class="navbar-item is-hoverable">
					<div class="navbar-item styleOftext sss">
						Профиль
					</div>

        			<div class="navbar-dropdown ">
						<a class="navbar-item styleOftext">
							{{ $root.user.email }}
						</a>
						
						<router-link class=" styleOftext"  to="/logout">
							<a class="navbar-item">
								Выход
							</a>
						</router-link>
						
        			</div>
      		</div>
			</div>
		</div>
	</nav>
</template>

<script>

</script>


<style>
	.navbar-item a:hover , .sss:hover{
		border-bottom:	2px solid red;
	}

	.navbar-link:not(.is-arrowless)::after {
		display:none;	
 	}


	.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {
    	display: none;
	} 
	.styleOftext{
		color:#858A8F;
	}


</style>