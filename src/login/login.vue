<template>
<div class="Divbody">
     <el-row >
        <el-col :span="10">
            <el-form :model="ruleFrom" :rules="rules" ref="ruleFrom" label-width="100px" >
              <ElFormItem label="账号" prop='name'>
                <el-input v-model="ruleFrom.name" placeholder="请输入账号"></el-input>
              </ElFormItem>
                <ElFormItem label="密码" prop='pass'>
                <el-input v-model="ruleFrom.pass" placeholder="请输入密码" type="password"></el-input>
              </ElFormItem>
              <el-form-item >
                  <el-button type="primary" @click="submitForm('ruleFrom')">登陆</el-button>
                 <router-link :to="{name:'registered'}"><el-button type="primary">注册</el-button></router-link> 
              </el-form-item>
            </el-form>
        </el-col>
       
    </el-row>
    
</div>
   
</template>
<script>
import Api from '../API';
import {mapGetters} from 'Vuex'
export default {
    data(){
      return {
            ruleFrom:{
            name:'',
            pass:''
        },
        rules:{
            name:[
                {required:true,message:'请输入账号',trigger: 'blur' }
            ],
            pass:[{required:true,message:'请输入密码',trigger: 'blur' }]
        }
      }
    },
    computed: {
        ...mapGetters([
            "ISLogin",
            "ISAdmin"  
        ])
    },
    methods: {
        submitForm(ruleFrom){
            this.$refs[ruleFrom].validate((valid)=>{
                if(valid){
                let  userInfo= Api.accountverification(this.ruleFrom.name,this.ruleFrom.pass);
                if(userInfo.length>0){
                    this.$store.commit("UpdateLogin",true)
                    if(this.ruleFrom.name=="admin"){
                        this.$store.commit("UpdateAdmin",true)
                    }else{
                        this.$store.commit("UpdateAdmin",false)
                    }
                   this.$router.push("index")
                }else{
                    window.alert("登陸失敗")
                }
                }else{
                   
                    return false
                }
            })
        }
    }
}
</script>
<style >
.Divbody{
  margin-top:15%;
  margin-left: 35%
}
</style>
