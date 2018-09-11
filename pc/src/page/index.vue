<template>
    <div class="index-main-page">
      <div class="index-top-main">
         <el-select  placeholder="选择会议室" style="margin-right:30px;width:300px" v-model="selectRoom" v-bind:disabled="!this.$store.state.indexRightState[0]">
           <el-option v-for="item in meetingRoom" :label="item.label" :value="item.value" :key="item.value"></el-option>
         </el-select>
        <el-button type="primary" @click="makeRoomClick()" v-bind:disabled="!this.$store.state.indexRightState[0]">预约会议室</el-button>
      </div>
      <div class="index-bottom-main">
        <div class="index-left-main"><customTabel ref="tabels"></customTabel></div>
        <div class="index-right-main">
          <div class="default-right" v-show="this.$store.state.indexRightState[0]">
          <Calendar ref="calender"/>
          <Notice class="index-right-notice" />
          </div>
          <div class="right-form" v-show="this.$store.state.indexRightState[1]">
            <customForm ref="customForm" @resetForm="formCleaner" />
          </div>
          <div class="right-org" v-show="this.$store.state.indexRightState[2]">
            <organization />
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import Calendar from "vue-calendar-component";
import Notice from "@/components/Notice";
import customTabel from "@/components/customTabel";
import customForm from "@/components/CustomForm";
import organization from "@/components/Organization"
import uilt from "../uilt/Uilts";
import example from "../uilt/Example";
export default {
  data: function() {
    return {
      selectRoom: "",
      meetingRoom: [],
      timeline: "",
      selectdate: "",
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      this.meetingRoom = example.getMeetingRoom();
      this.$refs.tabels.init(uilt.timeline()); 
    },
    formCleaner:function()
    {
      this.selectRoom = "";
      this.$store.commit("setSelectRoom","");
      this.$store.commit("setIndexRightState","default");
      this.$store.commit("setSelectDate",this.$store.state.today);
      this.$refs.calender.resetlistClass();
    },
    makeRoomClick: function() {
      if (this.selectRoom != "") {
        this.$store.commit("setIndexRightState", "tabel");
        this.$store.commit("setSelectRoom",this.selectRoom);
        this.$refs.customForm.setFormDate(this.$store.state.selectdate);
      }else
      {
        this.$message(
          {
            message:"请选择要预定的会议室",
            type:'error'
          }
        )
      }
      
    }
  },
  components: {
    Calendar,
    Notice,
    customTabel,
    customForm,
    organization
  }
};
</script>

<style>
:root {
  --background-color: #ffffff;
  --border-radius: 8px;
  --main-height: 100%;
}
.index-main-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  box-sizing: border-box;
  min-width: 1300px;
}
.index-left-main {
  width: 70%;
  height: var(--main-height);
  background: var(--background-color);
  border-radius: var(--border-radius);
  min-width: 860px;
}
.index-right-main {
  width: 28%;
  height: var(--main-height);
  background: var(--background-color);
  border-radius: var(--border-radius);
  min-width: 370px;
}
.index-right-notice {
  margin-top: 20px;
}
.index-top-main {
  width: 100%;
  height: 60px;
  box-shadow: 2px 2px 2px #ced8e2;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
}
.index-bottom-main {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.right-org
{
  width: 100%;
  height: 100%;
}
</style>

