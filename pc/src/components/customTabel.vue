<template>
    <div class="tabel-main-page">
        <div class="bottom-div">
          
<el-row class="hander">
    <el-col :span="4" class="align-padding">时间</el-col>
    <el-col :span="10">会议主题</el-col>
    <el-col :span="4">时段</el-col>
    <el-col :span="4">会议类型</el-col>
    <el-col :span="2">状态</el-col>
</el-row>
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

<div class="more">
  <div class="morelist"><span class="rect" style="background:#358ff5; margin-left:10px"></span><span style="margin-left:6px">未开始</span></div>
  <div class="morelist"><span class="rect" style="background:#4dc783; margin-left:10px"></span><span style="margin-left:6px">进行中</span></div>
  <div class="morelist"><span class="rect" style="background:#f8611f;margin-left:10px"></span><span style="margin-left:6px">已完成</span></div>
  <div style="margin-left:20px" @click="moreClick()">{{text}}</div>
</div>

<div class="top-div" v-if="!this.$store.state.tabellist">
  <div class="demoLabel"></div>
</div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      allTime:[],
      time: [],
      text:"更多预约",
    };
  },
  mounted: function() {},
  methods: {
    init: function(array) {
      this.allTime = array;
      this.time = this.allTime.slice(9, 19);
    },
    moreClick:function()
    {
      this.time = [];
      if(!this.$store.state.tabellist)
      {
      this.time = this.allTime;
      this.$store.commit("setTabelList",true);
      this.text = "返回";
      }else
      {
        this.$store.commit("setTabelList",false);
        this.text = "更多预约";
        this.time = this.allTime.slice(9, 19);
      }

     console.log(">>>")
    }
  }
};
</script>

<style>
.tabel-main-page {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}
.tabel-main-page .hander {
  color: #ffffff;
  background: #2381c8;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
}
.tabel-main-page .row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  cursor: pointer;
}
.tabel-main-page .row .for-row {
  display: flex;
  align-items: center;
  height: 100%;
}
.even {
  background: #f5f6fa;
}
.align-padding {
  padding-left: 25px;
}
.bottom-div
{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 96%;
    background: #ffffff;
    top:0;
}
.top-div
{
   position: relative;
   width: 30%;
   height: 88%;
   top:-92%;
   left:16%;
    z-index: 2;
    cursor: pointer;
}
.demoLabel
{
  width: 80%;
  height: 20%;
  background: #f8611f;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}
.more
{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
}
.more .rect
{
  display: block;
  width: 15px;
  height: 15px;
}
.morelist
{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
