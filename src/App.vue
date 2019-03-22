<template>
  <div id="app">
 <h1 v-if='!ISLogin'>欢迎进入答题系统</h1>
   <router-view></router-view>
  </div>
</template>

<script>
import Api from './APi'
import {mapGetters}  from 'Vuex'
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
  created() {
    Api.setUser();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
