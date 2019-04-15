<template>
  <div>
    <ElTable :data="Identity">
      <ElTableColumn label="用户名" prop="name"></ElTableColumn>
      <ElTableColumn label="密码" prop="pass"></ElTableColumn>
      <ElTableColumn label="角色">
        <template slot-scope="scope">
          <p>{{scope.row.Character==1?"超级管理员":"普通用户"}}</p>
        </template>
      </ElTableColumn>
      <ElTableColumn label="编辑">
        <template slot-scope="scope">
          <router-link :to="{name:'updateUser',params:{id:scope.$index,param:scope.row}}">
            <el-button type="primary">修改</el-button>
          </router-link>
          <el-button
            type="primary"
            @click="del(scope.$index,scope.row)"
            v-if="scope.row.Character==1?false:true"
          >删除</el-button>
        </template>
      </ElTableColumn>
    </ElTable>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "Vuex";
import Api from "../API";
export default {
  data() {
    return {
      List: []
    };
  },
  created() {
    this.getIdentity();
  },
  computed: {
    ...mapGetters(["Identity"])
  },
  methods: {
    ...mapMutations(["getIdentity", "delIdentity"]),
    Update(index, row) {},
    del(index, row) {
      this.delIdentity(index);
    }
  }
};
</script>

<style scoped>
</style>