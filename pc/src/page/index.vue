<template>
  <div class="index-wrapper">
    <div class="index-top-layout">
      <div class="select-room">
        <selectRoom />
      </div>
    </div>
    <div class="index-main-layout">
      <div class="left">
<leftTabel />
      </div>
      <div class="right">
        <div class="right-select-tab" v-show="this.$store.state.indexRightState[0]">
          <selectCalendar />
          <publicNotify />
        </div>
        <div class="rigth-tabel-tab" v-show="this.$store.state.indexRightState[1]">
          <inputForm />
        </div>
        <div class="rigth-org-tab" v-show="this.$store.state.indexRightState[2]">
<organization />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import selectRoom from "@/components/SelectRoom";
import selectCalendar from "@/components/SelectCalendar";
import publicNotify from "@/components/PublicNotify";
import inputForm from "@/components/InputForm";
import organization from "@/components/Organization";
import leftTabel from "@/components/LeftTabel";
export default {
 mounted:function()
 {
   //event.$on("re")
 },
  components: {
    selectRoom,
    selectCalendar,
    publicNotify,
    inputForm,
    organization,
    leftTabel,
  }
};
</script>

<style>
@import url("../style/global.css");
@import url("../style/index.css");
</style>
