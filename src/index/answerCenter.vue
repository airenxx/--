<template>
  <div>
    <ElForm :model="rulForm" ref="rulForm"  v-if="items.length>0?false:true" label-position="left" >
        <div v-if="!displayScore">
      <el-row type="flex" justify="center" >
        
        <ElCol :span="10">
          <ElFormItem :label="'第'+(topicIndex+1)+'题:'+items.Dry"></ElFormItem>
          <ElFormItem
            v-for="item in items.Option"
            :label="item.id+':'"
            :key="item.key"
          >{{item.value}}</ElFormItem>
          <div >
            <ElFormItem label="正确答案">
              <el-select v-model="rulForm.correct" placeholder="请选择正确答案" @change="correctSelect(items.correctAnswer)">
                <el-option label="请选择" value></el-option>
                <el-option
                  v-for="options in items.Option"
                  :key="options.value"
                  :label="options.id"
                  :value="options.id"
                ></el-option>
              </el-select>
            </ElFormItem>
          </div>
        </ElCol>
      </el-row>

      <ElFormItem>
        <el-row type="flex" justify="center" >
          <el-col :span="10">
            <el-button type="primary" :disabled="topicIndex==0?true:false" @click="BtnPrevious">上一题</el-button>
            <span>{{'当前:'+(topicIndex+1)+'共'+total+'题'}}</span>
            <el-button type="primary" :disabled="total==(topicIndex+1)?true:false" @click="Btnnext">下一题</el-button>
          </el-col>
         
        </el-row>
      </ElFormItem>
      </div>
      <div v-else class="totalscore">
          <el-alert type="success" :title="'总共'+total+'题,'+'你答对了'+totals+'题'+totalsTitle" center ></el-alert>
          
      </div>
    </ElForm>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "Vuex";
export default {
  data() {
    return {
      rulForm: {
        correct: ""
      },
      displayScore:false,
      totals:0,
      totalsTitle:''
    };
  },
  created () {
  
  },
  beforeRouteEnter:(to, from, next) => {
      next(vm=>{
     vm.initTopicIndex()
     vm.getTopic()
     vm.topicLoad()
      })
      
  },
  computed: {
    ...mapGetters(["items","topicIndex","total",'topics'])
  },
  methods: {
      ...mapMutations(['next','Previous','topicLoad','getTopic','initTopicIndex']),
      correctSelect(correctAnswer){
         
          if((this.topicIndex+1)==this.total){
              this.displayScore=true
          }
         if(correctAnswer==this.rulForm.correct){
             this.totals++
           
         }
          this.totals>=(this.total-1)?this.totalsTitle='   恭喜恭喜':this.totalsTitle='   再接再厉'
      },
      Btnnext(){
          this.rulForm.correct=''
          this.next()
      },
      BtnPrevious(){
           this.rulForm.correct=''
          this.Previous()
      }
  },
};
</script>

<style scoped>
.clacorrect {
  margin-right: 100px;
}
.totalscore{
    text-align: center;
    font-size: xx-large;
}
</style>