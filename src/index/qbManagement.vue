<template>
  <div>
    <el-row>
      <el-button type="primary" icon="el-icon-edit" @click="btnEdit=true">添加题目</el-button>
    </el-row>
    <el-dialog
      title="题目信息"
      :visible.sync="btnEdit"
      :close-on-click-modal="modal"
      :center="true"
      width="35%"
      @close="closeDialog('ruleForm')"
    >
      <el-row>
        <el-form :model="ruleForm" label-width="100px" ref="ruleForm">
          <ElFormItem
            label="题干"
            prop="Dry"
            :rules="{required: true, message: '请输入题干', trigger: 'blur'}"
          >
            <el-input v-model="ruleForm.Dry" placeholder="请输入题目的标题"></el-input>
          </ElFormItem>
          <ElFormItem
            v-for="(item,index) in ruleForm.Options"
            :key="item.key"
            :label="ruleForm.letter[index]"
            :prop="'Options.'+index+'.value'"
            :rules="{required: true, message: '选项不能为空', trigger: 'blur'}"
          >
            <el-col :span="18">
              <el-input v-model="item.value"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button
                @click.prevent="AddOption(index)"
                type="primary"
                icon="el-icon-plus"
                circle
                v-if="index>=3?false:true"
              ></el-button>
              <el-button
                @click.prevent="removeOption(index)"
                type="primary"
                icon="el-icon-minus"
                circle
                v-if="index==0?false:true"
              ></el-button>
            </el-col>
          </ElFormItem>
          <ElFormItem
            label="正确答案"
            prop="correctAnswer"
            :rules="{required:true,message:'正确答案不能为空',trigger: 'blur'}"
          >
            <el-select v-model="ruleForm.correctAnswer" placeholder="请选择正确答案">
              <ElOption
                v-for="item in  ruleForm.correctAnswerList"
                :key="item.key"
                :label="item.value"
                :value="item.value"
              ></ElOption>
            </el-select>
          </ElFormItem>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Addtopic('ruleForm')">确认</el-button>
        <el-button @click="cancel('ruleForm')">取消</el-button>
      </span>
    </el-dialog>

    <el-row>
      <el-table :data="topics">
        <ElTableColumn label="题干" prop="Dry"></ElTableColumn>
        <ElTableColumn label="选项" >
            <template slot-scope="scope">
                 <el-popover placement="top" trigger="hover">
                <p v-for="item in scope.row.Option" :key="item.id">{{item.id}}:{{item.value}}</p>
                 <div slot="reference" class="name-wrapper">
            <el-tag size="medium">...展开</el-tag>
          </div>
            </el-popover>
          
            </template>
        </ElTableColumn>
        <ElTableColumn label="正确答案" prop="correctAnswer">

        </ElTableColumn>
        <ElTableColumn label="编辑">
        <template slot-scope="scope">
          <router-link :to="{name:'updateUser',params:{id:scope.$index,param:scope.row}}">
            <el-button type="primary">修改</el-button>
          </router-link>
          <el-button
            type="primary"
            @click="del(scope.$index,scope.row)"
          >删除</el-button>
        </template>
      </ElTableColumn>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Api from "../API";
export default {
  data() {
    return {
      ruleForm: {
        Dry: "",
        Options: [
          {
            value: "",
            id: "A"
          }
        ],
        letter: ["A", "B", "C", "D", "E", "F", "G"],
        correctAnswerList: [
          {
            value: "A"
          }
        ]
      },
      btnEdit: false,
      modal: false,
      Dry: "",
      correctAnswer: ""
    };
  },
  created() {
    this.getTopic()
  },
  computed: {
    ...mapGetters(["topics"])
  },
  methods: {
    ...mapMutations(["getTopic"]),
    AddOption(index) {
      this.ruleForm.Options.push({
        value: "",
        key: Date.now(),
        id: this.ruleForm.letter[index + 1]
      });
      this.ruleForm.correctAnswerList.push({
        value: this.ruleForm.letter[index + 1],
        key: Date.now()
      });
    },
    removeOption(index) {
      this.ruleForm.Options.splice(index, 1);
      this.ruleForm.correctAnswerList.splice(index, 1)
    },
    Addtopic(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let Options = {
            Dry: this.ruleForm.Dry,
            Option: this.ruleForm.Options,
            correctAnswer:this.ruleForm.correctAnswer
          }
          Api.saveTopic(Options)
          this.getTopic()
          this.$refs[formName].resetFields()
          this.btnEdit = false
          this.ruleForm.Options = [{ value: "" }]
          this.ruleForm.correctAnswerList = [{ value: "A" }]
        } else {
          return false
        }
      });
    },
    cancel(formName) {
      this.$refs[formName].resetFields()
      this.btnEdit = false
      this.ruleForm.Options = [{ value: "" }]
      this.ruleForm.correctAnswerList = [{ value: "A" }]
    },
    closeDialog(formName) {
      this.$refs[formName].resetFields()
      this.ruleForm.Options = [{ value: "" }]
      this.ruleForm.correctAnswerList = [{ value: "A" }]
    },
    del(index,row){
        console.log(row)
    }
  }
};
</script>

<style scoped>
</style>