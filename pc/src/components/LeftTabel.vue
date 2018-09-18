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
<el-row v-for="(item,index) in list" :key="index" class="for-row" :class="{even:item.even}">
    <el-col :span="4" class="align-padding">{{item.time}}</el-col>
    <el-col :span="10"></el-col>
    <el-col :span="4">{{item.time}}</el-col>
    <el-col :span="4">{{item.type}}</el-col>
    <el-col :span="2">{{item.state}}</el-col>
</el-row>
</div>
      </div>
      <div class="tabel-list-top" ref="tabellistTop" v-show="!this.$store.state.tabellist">
<div v-for="(item,index) in worklist" :key="index" :style="setWorkStyle(item)" class="currencyOrder" @click="infoPanel(index)">
    <span>{{item.name}}</span>
    <span>{{item.phone}}</span>
  </div>
      </div>
    </div>
    <div class="tabel-mark-page">
      <div class="overMark"></div><span>已结束</span>
      <div class="ingMark"></div><span>进行中</span>
      <div class="notMark"></div><span>未开始</span>
      <div class="moreStyle" @click="moreClick()">{{text}}</div>
    </div>
    <el-dialog title="会议信息" width="40%" :visible="dialog" @close="dialogClose()"></el-dialog>
  </div>
  
</template>
<style>
.tabel-main-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tabel-list-page {
  height: 90%;
  margin: 20px;
}
.tabel-list-bottom {
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
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
}
.tabel-list-bottom .row .for-row {
  display: flex;
  align-items: center;
  height: 10%;
}
.tabel-list-top {
  position: relative;
  z-index: 2;
  width: 85%;
  height: calc(100% - 50px);
  margin-top: 50px;
  margin-left: 15%;
  top: -100%;
  display: flex;
  padding-top: 4px;
}
.currencyOrder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.currencyOrder span {
  margin-top: 5px;
}
.even {
  background: #f5f6fa;
}
.align-padding {
  padding-left: 25px;
}
.tabel-mark-page {
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.tabel-mark-page .overMark {
  width: 16px;
  height: 16px;
  background: rgb(248, 97, 31);
  margin-right: 6px;
}
.tabel-mark-page .ingMark {
  width: 16px;
  height: 16px;
  background: rgb(77, 199, 131);
  margin-right: 6px;
}
.tabel-mark-page .notMark {
  width: 16px;
  height: 16px;
  background: rgb(53, 143, 245);
  margin-right: 6px;
}
.tabel-mark-page span {
  margin-right: 15px;
}
.tabel-mark-page .moreStyle {
  margin-right: 35px;
  cursor: pointer;
}
</style>
<script>
import example from "../uilt/Example";
export default {
  data: function() {
    return {
      list: [],
      text: "更多预约",
      worklist: [],
      dialog: false,
      workWidth: 0,
      workHeight: 0
    };
  },
  mounted: function() {
     this.list = example.getMeetinglist(true);
     this.worklist = example.getMeetingWorklist();
    window.addEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler: function() {
      this.workWidth = this.$refs.tabellistTop.offsetWidth;
      this.workHeight = this.$refs.tabellistTop.offsetHeight;
    },
    
    setWorkStyle: function(array) {
      if (this.workWidth == 0 && this.workHeight == 0) {
        this.workWidth = this.$refs.tabellistTop.offsetWidth;
        this.workHeight = this.$refs.tabellistTop.offsetHeight;
      }

      let obj = {};
      obj.width = "20%";
      obj.position = "absolute";
      obj.height = array.height * 9 + "%";
      obj.marginTop = this.workHeight * ("0." + array.margin) + "px";
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
      
      if (!this.$store.state.tabellist) {
        this.list = example.getMeetinglist(false);
        this.$store.commit("setTabelList", true);
        this.text = "返回";
        this.worklist = [];
      } else {
        this.$store.commit("setTabelList", false);
        this.text = "更多预约";
        this.list = example.getMeetinglist(true);
        this.worklist = example.getMeetingWorklist();
      }
    },
    dialogClose: function() {
      this.dialog = false;
    },
    infoPanel: function(index) {
      this.dialog = true;
      console.log(index);
    }
  }
};
</script>
