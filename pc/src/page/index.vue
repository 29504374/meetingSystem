<template>
  <div class="index-wrapper">
    <div class="index-top-layout">
      <div class="select-room">
        <selectRoom />
      </div>
    </div>
    <div class="index-main-layout"></div>
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
@import url('../style/index.css');
</style>
