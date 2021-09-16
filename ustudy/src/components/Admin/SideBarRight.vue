<template>
  <section class="main-right">
    <div class="main-right">
      <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :fullwidth="fullwidth"
        :overlay="overlay"
        :right="right"
        :reduce="reduce"
        v-model="open"
      >
        <div class=" main-right mx-3 is-flex is-justify-content-space-between">
          <p :class="reduce ? 'is-hidden' : ''" class="mx-3">Dashboard</p>
          <div>
            <i class="icon-exit fas fa-sign-out-alt" @click="toggleBar"></i>
          </div>
        </div>
        <b-menu>
          <Accordian :callback="reduce" @click-in="toggle"></Accordian>
        </b-menu>
      </b-sidebar>
    </div>
  </section>
</template>

<script>

import Accordian from '../Accordian.vue'

export default {
  components:{
    Accordian
  },
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: true,
		  reduce: false,
      width: 0,
    };
  },
  methods:{
		toggleBar(){
			this.reduce =! this.reduce
			this.$emit('rightBar-hidden', this.reduse)
		},
		toggle(){
			this.reduce = false
			this.$emit('accordians-action', this.reduce)
		}
	}
};
</script>

<style>
.main-right{
  width: auto;
  margin-top: 90px !important;
  margin-bottom:20px;
}
.is-hidden{
  display: none;
}
.icon-exit{
  font-size:25px;
  margin-right:10px;
}

</style>