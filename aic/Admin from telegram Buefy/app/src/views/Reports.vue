<template>
<div class="container">
	<div class="line-around px-3 py-4">

		<div id="contact" class="has-text-left is-flex is-justify-content-flex-start columns mt-5 mr-5">
			<div class="column is-8"></div>
			<input class="input is-small  searchStaff " type="text" placeholder="найти сотрудника...">
			<button class="button is-small">Поиск</button>
		</div>


	<i class="fab fa-medium"></i>
	<i class="far fa-envelope"></i>
	<div class="fonts">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aperiam?</div>


		<div>
			<h2 class="title is-size-3 pt-3 pr-3 has-text-centered">Отчеты:</h2>
			<div class="columns has-text-left">
				<div class="column">
					<template>
						<b-field label="Дата:" :mobile-native=false>
							<b-datepicker
								placeholder="нажмите для выбора"
								v-model="dates"
								:mobile-native="false"
								range>
							</b-datepicker>
						</b-field>
					</template>	
					<button class="button is-light" @click="GetReports">Поиск</button>
				</div>
				<div class="column"></div>
				<div class="column"></div>
			</div>
		</div>
		<Pagination class="pb-4" @page-next="nextPage" :count="count"></Pagination>
		<div class="rows line-around">
			
			<div class="mx-6 my-6" v-for="(report, index) in reports" :key="index">
				<div class="row is-2 mb-3"> <p>ID:{{report.user_id}} <br> Время: {{report.date}}</p></div>
				<div class="row is-10 mb-1"><p>{{report.body}}</p></div>
				<!-- <p class="line-bottom mb-3"></p> -->
				<button class="button is-danger is-small mt-3">Удалить</button>
				<p class="line-bottom-black mt-6"></p>
			</div>
		</div>
	</div>



</div>
	
</template>

<script>
import axios from 'axios';
import Pagination from '../components/Pagination.vue'


export default ({
	name:"reports",
	components:{
		Pagination
	},
	data(){
    	return{
			reports:null,
			dates:[],
			dateFrom:null,
			dateTo:null,
			totalItem:5,
			pageNumber:0,
			count:null
    	}
  	},
  	methods:{
		nextPage(value){
			this.pageNumber = value;
			this.GetReports();
		},
	  	parseDate(){
			let [startDate, endDate] = this.dates;
		
			if(startDate && endDate){
				this.dateFrom = this.formatDate(startDate)
				this.dateTo = this.formatDate(endDate)
			}
		},
		formatDate(date) {
			let day = date.getDate();
			let monthIndex = date.getMonth();
			let year = date.getFullYear(); 
			let formattedDate = (
					(day < 10 ? '0' + day:day)
					+'.'+ 
					(monthIndex < 10 ? '0' + (monthIndex+1) : monthIndex +1)
					+'.'+
					(year)
				)
			return formattedDate 
		},
		async GetReports() {
			this.parseDate()
			this.reports = (await axios.post('reports',{
				date_from: this.dateFrom,
				date_to: this.dateTo,
				from: this.pageNumber*this.totalItem,
				how: this.totalItem
      	})).data;

			let count = (await axios.post('reports/count',{
				date_from: this.dateFrom,
				date_to: this.dateTo,
      	})).data.count
			
			this.count = Math.floor(count / this.totalItem)

			if (count % this.totalItem !== 0) {
				this.count++
			}

		}
	                
   }
})

</script>



<style scoped>

	.fonts{
		font-family: 'CaslonPro-Italic';
	}

	p{
		word-wrap: break-word;
	}


	.line-bottom{
		border-bottom: 1px solid red;
	}

	.line-bottom-black{
		border-bottom: 3px dashed #858A8F;
	}

</style>