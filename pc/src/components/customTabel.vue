<template>
  <div class="tabel-main-page">
    <div class="tabel-list-page">
      <div class="tabel-list-bottom">
        <div>
          <el-row class="hander">
    <el-col :span="4" class="align-padding">时间</el-col>
    <el-col :span="10">会议主题</el-col>
    <el-col :span="4">时段</el-col>
    <el-col :span="4">会议类型</el-col>
    <el-col :span="2">状态</el-col>
</el-row>
        </div>
        <div class="row">
<el-row v-for="(item,index) in time" :key="index" class="for-row" :class="{even:item.even}">
    <el-col :span="4" class="align-padding">{{item.time}}</el-col>
    <el-col :span="10"></el-col>
    <el-col :span="4">{{item.meetingTime}}</el-col>
    <el-col :span="4">{{item.meetingType}}</el-col>
    <el-col :span="2">{{item.meetingState}}</el-col>
</el-row>
</div>
      </div>
      <div class="tabel-list-top">
<div v-for="(item,index) in orderlist" :key="index" :style="setOrderStyle(item)" class="currencyOrder">
    <span>{{item.name}}</span>
    <span>{{item.phone}}</span>
  </div>
      </div>
    </div>
    <div class="tabel-mark-page"></div>
  </div>
</template>
<style>
.tabel-main-page
{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tabel-list-page
{
  
  height: 94%;
  margin: 20px;
}
.tabel-list-bottom
{
  width: 100%;
  height: 100%;
}
.tabel-list-bottom .hander {
  color: #ffffff;
  background: #2381c8;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
}
.tabel-list-bottom .row {
width: 100%;
height:calc(100% - 50px);
display: flex;
flex-direction: column;
}
.tabel-list-bottom .row .for-row {
  display: flex;
  align-items: center;
  height: 10%;
}
.tabel-list-top
{
  position: relative;
  z-index: 2;
  width: 85%;
  height: calc(100% - 50px);
  margin-top: 50px;
  margin-left: 15%;
  top: -100%;
  overflow: hidden;
  display: flex;
 
}
.even {
  background: #f5f6fa;
}
.align-padding {
  padding-left: 25px;
}
.tabel-mark-page
{
  width:100%;
  height: 6%;
}
</style>
<script>
import example from "../uilt/Example";
export default {
  data: function() {
    return {
      allTime: [],
      time: [],
      text: "更多预约",
      orderlist: []
    };
  },
  mounted: function() {
    this.orderlist = example.getMeetingOrder();
  },
  methods: {
    init: function(array) {
      this.allTime = array;
      this.time = this.allTime.slice(9, 19);
    },
    setOrderStyle: function(array) {
      let obj = {};
      //obj.width = "100%";
      obj.height = (array.height * 9.3) + "%";
      obj.marginTop = (array.margin*10)+"%";
      let color = "";
      switch (array.state) {
        case "已结束":
          color = "rgb(248, 97, 31)";
          break;
           case "进行中":
          color = "rgb(77, 199, 131)";
          break;
           case "未开始":
          color = "rgb(53, 143, 245)";
          break;
      }
      obj.background = color;
      return obj;
    },
    moreClick: function() {
      this.time = [];
      if (!this.$store.state.tabellist) {
        this.time = this.allTime;
        this.$store.commit("setTabelList", true);
        this.text = "返回";
      } else {
        this.$store.commit("setTabelList", false);
        this.text = "更多预约";
        this.time = this.allTime.slice(9, 19);
      }
    }
  }
};
</script>
