<template>
  <div id="app">
<head-Top isLogin='ISLogin'></head-Top>
   <router-view></router-view>
  </div>
</template>

<script>
import Api from './APi'
import {mapGetters}  from 'Vuex'
import headTop from './components/headTop'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      "ISLogin"
    ])
  },
  components:{
   headTop
  },
  created() {

  }
}
</script>

<style scoped>

</style>
