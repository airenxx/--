<template>
  <div class="body">
      <el-row >
        <ElCol :span="6">
            <el-tabs tab-position="left" style="height: 100%;" @tab-click="tabClick">
              <ElTabPane label="用户管理" name="userManagement" tabIndex=1></ElTabPane>
              <ElTabPane label="题库管理" name="qbManagement"></ElTabPane>
              <ElTabPane label="答题中心" name="answerCenter"></ElTabPane>
            </el-tabs>
        
        </ElCol>
             <el-col :span="18">
            <div class="divView">
              <router-view></router-view>
            </div>
        </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created () {
      this.$router.push({ path: "/index/userManagement"})
  },
  methods: {
    tabClick(tab) {
      this.name = tab.name;
      this.$router.push({ path: "/index/" + this.name })
    }
  }
};
</script>

<style scoped>
.body{
    margin: 0;
    padding: 10px
}
</style>
