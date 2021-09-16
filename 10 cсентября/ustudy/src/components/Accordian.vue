<template>
    <section>
        <b-collapse
            @click="toggle()"
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
        >
            <template #trigger="props">
                
                <div
                    class="card-header"
                    role="button"
                    @click="toggle()"
                >
                    <p :class="callback ? 'is-hidden' : ''" class="card-header-title">
                        {{ collapse.title }}
                    </p>
                    
                    <a  class="card-header-icon">
                        
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                        
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    {{ collapse.text }}
                </div>
            </div>
        </b-collapse>

    </section>
</template>


<script>
    export default {
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'Сведения',
                    text: 'ыфвфыарощШЫВРПЩШФЫРПЩШРФАЩШПРФШВАРПЩШФВАПЩШРЫВЩШАПРЩШЫВАРПЩШВАШПЩОЩШВАОПЩШОВАПШЩОВАЩШПОЩШВАОПЩШВТАЩПТВЩАТЩШВОРПЩШОФВАШПОФЩШПОЩШФВОАПЩФОВАПЩОФВАЩПОФЩВАПОЩШВАОПШЩФОЩПОФВАПОЩШВФАОПЩШФВОАПЩШТФВШФШЩВТАШФОВШПОФШВПТЩШФВТПЩШВАТПЩФШВТАПШЩФВОАПШОФВШПОФП'
                },
                {
                    title: 'Закрепленные элементы',
                    text: 'Text',
                    
                },
                {
                    title: 'События',
                    text: 'Text 3'
                }
                ]
            }
        },
        props:['callback'],
        methods:{
            toggle(){
                this.$emit('click-in')
            }
		},
        watch:{
            callback(){
               this.isOpen = null
            }
            
        }
    }
</script>


<style scoped>
   .card-content {
	    padding: 0 !important;
    }

    .content{
        min-height: calc(100vh - 306px);
    }

    .card-header-title {
        padding: 0.75rem 3rem;
    }

    .collapse{
        position: relative;
    }

    .card:nth-child(1):before{
        position: absolute;
	    top: 11px;
	    left: 15px;
        font-size: 20px;
	    content: "\f05a";
	    font-family: "Font Awesome 5 Free";
	    font-weight: 900;
	    color: black;
    }

    .card:nth-child(2):before{
        position: absolute;
	    top: 11px;
	    left: 15px;
        font-size: 20px;
	    content: "\f08d";
	    font-family: "Font Awesome 5 Free";
	    font-weight: 900;
	    color: black;
        transform: rotate(35deg);
    }
    .card:nth-child(3):before{
        position: absolute;
	    top: 15px;
	    left: 15px;
        font-size: 20px;
	    content: "\f07b";
	    font-family: "Font Awesome 5 Free";
	    font-weight: 900;
	    color: black;
    }
    .content[data-v-bf6fd894] {
        min-height: calc(100vh - 315px);
        padding: 0 15px;
        overflow-wrap: break-word;
    }

</style>