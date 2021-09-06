<template>
  <div class="login container">
    
    <h2 class="p-text-center">Отчеты за сегодня</h2>

  </div>
</template>

<script>


export default {
    components:{
   
    },
    data() {
      return {
        reports:null,
        dateFrom:null,
        dateTo:null,
        totalItem:5,
        pageNumber:0,
        dates:[],
        show:false,
        count:null,
        buttonWasClicked:false,
        expandedRows: [] 
      }
    },
    methods:{
      onPage(event) {
        this.pageNumber = event
        this.GetReports()
      },

      parseDate(){
			  let [startDate, endDate] = this.dates
		
			  if(startDate && endDate){
				  this.dateFrom = this.formatDate(startDate)
				  this.dateTo = this.formatDate(endDate)
			  }
		  },
      formatDate(date) {
			  let day = date.getDate()
			  let monthIndex = date.getMonth()
			  let year = date.getFullYear()
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
        this.buttonWasClicked = true
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
		  },
    }
}
</script>

<style>

  .login{
	  border: 1px solid #E5E5E5;
    border-radius: 7px;
    padding: 30px;
	}

  @media (max-width:960px){
    .login{
	    border: 1px solid #E5E5E5;
      border-radius: 7px;
      padding: 0px;
	  }
  }

</style>