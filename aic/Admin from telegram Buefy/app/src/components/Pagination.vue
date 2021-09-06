<template>
	<div class="column is-3">
		<nav class="pagination is-centered" role="navigation" aria-label="pagination">
			
			<ul class="pagination-list" v-for="(page,index) in count" :key="index">
				<li>
					<a class="pagination-link " aria-label="Page 1"  @click="nextPage(index)">{{page}}</a>
				</li>
			</ul>
			<!-- <a class="pagination-previous" title="This is the first page" disabled>Предыдущая</a>
			<a class="pagination-next" @click="nextPage()">Следующая</a> -->
		</nav>
	</div>
</template>

<script>

	export default {
		props:['count'],
		methods:{
			nextPage(index){
				this.$emit('page-next', index);
			}
		}
 	}

</script>