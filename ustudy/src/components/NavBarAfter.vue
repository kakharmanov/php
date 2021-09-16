<template>
	<div>
		<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="mx-4 navbar-item">
					<img src="../assets/icon/Vector.png" alt="menu">
				</a>
				<a class="navbar-item" href="#">
					<img src="../assets/u-study_logo.svg" width="112" height="28">
				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
					
						<a class="mx-4 icon-search-parent">	
							<p class="control has-icons-left has-icons-right">
								<input class="input" type="text" placeholder="Поиск">
								<span class="icon is-small is-left">
									<i class="icon-search fas fa-search"></i>
								</span>
							</p>
						</a>
						<a class="mx-4">
							<i class="nav-icon-conf far fa-question-circle"></i>
						</a>
						<a class="mx-4">
							<i class="nav-icon-conf far fa-bell"></i>
						</a>
         		  	<router-link  to="/">
							<a class="mx-4">
								<i class="nav-icon-conf far fa-user-circle"></i>
							</a>
						</router-link>
					</div>
				</div>
			</div>
		</nav>
			
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.navbar {
		min-height: 4.813rem !important;
		border-bottom: 1px solid #DBDBDB;
	}
	.navbar{
		z-index: 100 !important;
	}
	.nav-icon-conf{
		font-size: 25px;
	}
	.input {
		width: 455px !important;
		max-width: 100% !important;
		position:  relative !important;
	}
	
	.input-icon{
		position: relative !important;
	}

.input-icon::before{
	position: absolute !important;
	top: 15px !important;
	left: 15px !important;
	font-size: 20px !important;
	content: "\f05a" !important;
	font-family: "Font Awesome 5 Free" !important;
	font-weight: 900 !important;
	color: black !important;
	z-index: 1000000 !important;
}
</style>