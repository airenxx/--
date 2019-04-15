<template>
    <div class="headtop">
<h1 v-if="isLogin">欢迎进入答题系统</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
             
            }
        },
        created () {
            
        },
        props: ["isLogin"]
    }
</script>

<style scoped>
.headtop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
