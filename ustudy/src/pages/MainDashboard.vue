<template>
<div>
	<nav class="container ">
		<ul class="is-flex is-align-items-center config">
			<li class="mx-4 ">
				<img src="../assets/icon/Vector.png" alt="navigation icon">
			</li>
			<li class="mx-4 mr-auto">
				<img src="../assets/u-study_logo.svg" alt="logo">
			</li>
			<li class="mx-4">
				 <input class="input" type="text" placeholder="поиск">
			</li>
			<li class="mx-4">
				<i class="far fa-question-circle"></i>
			</li>
			<li class="mx-4">
				<i class="far fa-bell"></i>
			</li>
			<li class="mx-4">профиль</li>
		</ul>
	</nav>

	<section class="container">
		<div class="is-flex column-setting">
			<div class="Main-view-1">
				<h4 class="ml-5 my-5">Dashboard</h4>
				<h4 class="ml-5 my-3">Пользователи</h4>
				<DragNdrop></DragNdrop>
			</div>
			<div class="Main-view-2">
				<div></div>
				<div class="is-flex is-justify-content-space-between">
					<h5 class="mx-5 my-5">Dashboard</h5>
					<i class="mx-5 my-5 fas fa-bars"></i>
				</div>	
				<div>
					<Table></Table>
				</div>
			</div>
			<div class="Main-view-3">
				<Accordion></Accordion>
			</div>
		</div>
	</section>
</div>
</template>

<script>
import Table from '../components/Table.vue'
import Accordion from '../components/Accordions.vue'
import DragNdrop from '../components/DragNdrop.vue'

export default {
	components:{
		Table,
		Accordion,
		DragNdrop
	}
}

</script>

<style scoped>
	.config{
		height: 77px;
	}
	.column-setting {
		height: 100vh;
	}
	.Main-view-1{
		width: 240px;
		border-top:1px solid #DBDBDB;
		border-right:1px solid #DBDBDB;
		background-color: #F7F5F2;
	}
	.Main-view-2{
		width: 864px;
		border-top:1px solid #DBDBDB;
		border-right:1px solid #DBDBDB;
	}
	.Main-view-3{
		width: 328px;
		border-top:1px solid #DBDBDB;
	}
	
</style>