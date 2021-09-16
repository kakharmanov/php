<template>
  <section>
    <div class="main-left">
      <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :fullwidth="fullwidth"
        :overlay="overlay"
        :right="right"
        v-model="open">
        
        <div class="p-1 mx-5">
          <div class="mb-3">
              <router-link  to="/admin">
                <b-menu-list >Dashboard</b-menu-list>
              </router-link>
            </div>
            <div class="mt-3">
              <router-link to="/admin/users">
                <b-menu-list>Пользователи</b-menu-list>
              </router-link>
          </div>
        </div>

      </b-sidebar>
    </div>
  </section>
</template>

<script>

export default {
  components:{
  },
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>

<style>

.main-left{
		width: auto;
		margin-left: 260px;
	}
  .p-1 {
  margin-top: 90px;
}
</style>