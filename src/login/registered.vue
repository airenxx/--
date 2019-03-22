<template>
  <el-row>
    <el-col :span="10">
      <el-form :model="ruleFrom" :rules="rules" ref="ruleFrom" label-width="100px">
        <ElFormItem label="账号" prop="name">
          <el-input v-model="ruleFrom.name" placeholder="请输入账号"></el-input>
        </ElFormItem>
        <ElFormItem label="密码" prop="pass">
          <el-input v-model="ruleFrom.pass" placeholder="请输入密码" type="password"></el-input>
        </ElFormItem>
        <ElFormItem label="确认密码" prop="checkPass">
          <el-input v-model="ruleFrom.checkPass" placeholder="请输入密码" type="password"></el-input>
        </ElFormItem>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleFrom')">确认</el-button>
          <el-button type="primary" @click="reset('ruleFrom')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import Api from '../API'
export default {
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleFrom.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleFrom: {
        name: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(ruleFrom) {
      this.$refs[ruleFrom].validate(valid => {
        if (valid) {
          let userInfo = Api.CacheUser({ name:this.ruleFrom.name,pass:this.ruleFrom.pass});
          this.$refs[ruleFrom].resetFields()
          this.$router.push("login")
        } else {
          return false;
        }
      });
    },
    reset(ruleFrom) {
      this.$refs[ruleFrom].resetFields()
    }
  }
};
</script>
<style scoped>
.el-row{
  margin-top:15%;
  margin-left: 35%
}
</style>

