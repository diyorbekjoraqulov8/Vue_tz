<template>
  <div id="app">
    <v-table
      :users_data="USERS"
    />
  </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from "vuex";
import vTable from "./components/table/v-table.vue";
export default {
  components:{
    vTable,
  },
  computed:{
    ...mapGetters(["USERS"])
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(["GET_USERS_FORM_API"]),
    getUsers(){
      this.GET_USERS_FORM_API()
    }
  },
  mounted() {
    this.getUsers()
  },
}
</script>
<style lang="scss">
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-top: 60px;
  color: #2c3e50;
  text-align: center;
}
</style>
