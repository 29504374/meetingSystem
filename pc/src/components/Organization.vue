<template>
    <div class="organization-main-page">
<div class="org-list-node" v-for="(item,index) in list" :key="index">
    <h3>{{item.name}}<el-checkbox class="marginborder" /></h3>
    <div class="org-list-city" v-for="(city,indexCity) in item.cityList" :key="indexCity">
        <h4>{{city.name}}<el-checkbox /></h4>
    <div class="org-list-area">
        <li v-for="(area,indexArea) in city.areaList" :key="indexArea">
<span>{{area}}</span>
<el-checkbox class="marginborder" />
        </li>
        
    </div>
    </div>
    </div>
</div>
   
</template>
<script>
import example from "../uilt/Example";
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
      this.list = example.getOrganizationTree();
      console.log(this.list[0].cityList[0].areaList);
    }
  }
};
</script>
<style>
.organization-main-page {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
.org-list-node {
  display: flex;
  flex-direction: column;
}
.org-list-area
{
    display: flex;
    flex-wrap: wrap;    
}
.org-list-area li
{
    width: 90px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  
    
}
.marginborder
{
    margin-left: 10px;
}
.organization-main-page .el-checkbox__inner
{
    width: 16px;
    height: 16px;
}
</style>
