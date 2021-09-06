<template>
  <div class="login container">
    
    <h2 class="p-text-left">Отчеты за сегодня</h2>
    
    <div class="login">
      
      <div class="p-field p-col-12 p-md-4">
        <label for="range"></label>
        <Calendar id="range" v-model="dates" selectionMode="range" :manualInput="false" :showButtonBar="true"/>
        <Button @click="GetReports" class="p-button-sm p-ml-2">Поиск</Button>
      </div>
        
      <template v-if="buttonWasClicked">
        
        <template v-if="reports == 0">
          <Message severity="info">На эти даты, отчетов не обнаружено!</Message>
        </template>
        
        <template v-else-if="reports != null">
          <Paginator :rows="1" :totalRecords="count" @page="onPage($event.page)"></Paginator>

          <DataTable 
            :value="reports" 
            responsiveLayout="stack" 
            dataKey="id"
            v-model:expandedRows="expandedRows"
            @rowExpand="onRowExpand"
            @rowCollapse="onRowCollapse"  
          >
            <Column :expander="true" headerStyle="width: 3rem" header="Развернуть/Свернуть" />
            <Column field="id" header="ID" headerStyle="width: 3em"></Column>
            <Column field="user_id" header="Имя" headerStyle="width: 5em"></Column>
            <Column field="date" header="Дата" headerStyle="width: 8em"></Column>

            <Column headerStyle="width: 8em" bodyStyle="text-align: left">
              <template #header>
                <p>Действие</p>
              </template>
              <template #body>
                <WarningModal></WarningModal>
              </template>
            </Column>
         

            <template #expansion="reports">
              
              <DataTable :value="reports" responsiveLayout="scroll">                      
                <Column field="body" header="Описание" >
                  <template #body="reports" >
                      {{reports.data.body}}
                  </template>
                </Column>
              </DataTable>
           
            </template>

          </DataTable>
        </template>
      </template>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import WarningModal from '../components/WarningModal.vue'

export default {
    components:{
      WarningModal
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