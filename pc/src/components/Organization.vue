<template>
    <div class="org-main-page">
      <div class="org-list-page">
        <div class="org-title-list" v-for="(item,i) in list" :key="i">
          <div class="title"><el-checkbox v-model="item.selected" @change="selectDepartments(i)">{{item.name}}</el-checkbox></div>
          <div class="list">
            <li v-for="(child,j) in list[i].children" :key="j">
              <el-checkbox v-model="child.selected" @change="selectItem(i,j)">{{child.name}}</el-checkbox>
              </li>
          </div>
        </div>
      </div>
      <div class="org-button-page">
        <el-button type="primary" @click="restOrgSelected()">重置</el-button>
        <el-button type="primary" @click="submitOrgSelect()">确定</el-button>
      </div>
</div>
   
</template>
<script>
import example from "../uilt/Example";
import events from"../events/Events";
export default {
  data: function() {
    return {
      list: []
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      this.$store.commit("setOrglistArray",example.getOrganizationTree());
      this.list =this.$store.state.orglistArray;
      events.$on("restform",this.restformHandler);
    },
    restformHandler:function()
    {
      this.list =this.$store.state.orglistArray;
    },
    selectDepartments: function(index) {
      this.selectAll(index, this.list[index].selected);
    },
    selectAll: function(index, booleans) {
      let array = this.list[index].children;
      for (let i = 0; i < array.length; i++) {
        array[i].selected = booleans;
      }
    },
    selectItem: function(i, j) {
      let array = this.list[i].children;
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i].selected) {
          count++;
        }
      }
      if (count == array.length) {
        this.list[i].selected = true;
      } else {
        this.list[i].selected = false;
      }
    },
    restOrgSelected:function()
    {
      
      this.$store.commit("resetOrglistArray",example.getOrganizationTree());
      this.list = this.$store.state.orglistArray;
    },
    submitOrgSelect:function()
    {
      this.$store.commit("setIndexRightState","tabel");
      events.$emit("orgComplete");
    }
  }
};
</script>
<style>
.org-main-page {
  width: 100%;
  height: 100%;
}
.org-list-page {
  margin-top: 10px;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 10px;
  padding-left: 10px;
}
.org-title-list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.org-title-list .title {
  margin-bottom: 10px;
}
.org-title-list .title .el-checkbox__label {
  font-size: 1rem;
  color: #1a8fff;
}
.org-title-list .list {
  display: flex;
  flex-wrap: wrap;
}
.org-title-list .list li {
  display: flex;
  justify-content: flex-start;
  width: 25%;
  margin-bottom: 12px;
  cursor: pointer;
}

.org-button-page {
  width: 96%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
