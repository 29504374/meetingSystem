<template>
    <div class="select-room-component">
        <el-select  placeholder="选择会议室" class="seleted" v-model="value" v-bind:disabled="!this.$store.state.indexRightState[0]">
           <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.label" />
         </el-select>
        <el-button type="primary" @click="submitRequisite()" v-bind:disabled="!this.$store.state.indexRightState[0]" >预约会议室</el-button>
    </div>
</template>
<script>
import example from "./../uilt/Example";
export default {
  data: function() {
    return {
      value: "",
      options: []
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      this.options = example.getSelectRoomOptions();
    },
    submitRequisite: function() {
      if (this.value != "") {
        this.$store.commit("setIndexRightState", "tabel");
      }
    }
  }
};
</script>

<style>
.select-room-component {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.select-room-component .seleted {
  width: 300px;
  margin-right: 20px;
}
</style>
