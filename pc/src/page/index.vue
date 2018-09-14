<template>
  <div class="index-wrapper">
    <div class="index-top-layout">
      <div class="select-room">
        <selectRoom />
      </div>
    </div>
    <div class="index-main-layout">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import selectRoom from "@/components/SelectRoom"
export default {
  components:{
    selectRoom,
  }
}
</script>

<style>
@import url('../style/global.css');
@import url('../style/index.css');
</style>
