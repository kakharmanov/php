<template>
	<div>
		<NavBarAfter></NavBarAfter>
		<section class="main">
			<div class="main-content is-flex">
				<TestologLeftSideBar></TestologLeftSideBar>
				<div :class="RightSideBarHidden ? 'is-hidden-width' : '' " class="main-center">	
					<router-view/>
				</div>
				<TestologRightSideBar @rightBar-hidden="toggleBar()" @accordians-action="toggle()"></TestologRightSideBar>
			</div>
		</section>
	</div>
</template>

<script>
import TestologLeftSideBar from '@/components/Testolog/TestologLeftSideBar.vue'
import TestologRightSideBar from '@/components/Testolog/TestologRightSideBar.vue'
import NavBarAfter from '@/components/NavBarAfter.vue'

export default {
	components:{
		NavBarAfter,
		TestologLeftSideBar,
		TestologRightSideBar
	},
	data(){
		return{
			RightSideBarHidden:false
		}
	},
	methods:{
		toggleBar(){
			this.RightSideBarHidden =! this.RightSideBarHidden;
		},
		toggle(emit){
			this.RightSideBarHidden = emit
		}
	}
}

</script>

<style>

/* =====================SECTION-PARAMS======================================== */
	.main{
		margin-top: 4.813rem;
	}
	.main-content{
		width: auto;
	}
	
	.main-center{
		margin-right: 260px;
		padding-right:10px ;
		width: 100%;
	}

	.is-hidden-width{
		margin-right: 0;
		width: 100%;
	}

</style>