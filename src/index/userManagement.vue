<template>
  <div>
    <ElTable :data="Identity">
      <ElTableColumn label="用户名" prop="name"></ElTableColumn>
      <ElTableColumn label="密码" prop="pass"></ElTableColumn>
      <ElTableColumn label="编辑" >
          <template slot-scope="scope">
              <el-button type="primary" @click="Update(scope.$index,scope.row)">修改</el-button>
              <el-button type="primary">删除</el-button>
          </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from "Vuex";
import Api from "../API";
export default {
  data() {
    return {
      List:[]
    };
  },
  created() {
      this.getIdentity()
  },
  computed: {
    ...mapGetters(["Identity"])
  },
  methods: {
    ...mapMutations([
        'getIdentity'
    ]),
    Update(index,row){
        console.log(index,row)
    }
  }
};
</script>

<style scoped>
</style>