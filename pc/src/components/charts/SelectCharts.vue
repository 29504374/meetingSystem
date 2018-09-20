<template>
    <div class="select-charts-wrapper">
<div class="left">
    <el-select v-model="roomValue">
        <el-option v-for="(item,index) in roomlist" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-date-picker v-model="start" type="date" placeholder="开始日期" />
    <el-date-picker v-model="end" type="date" placeholder="结束日期" />
    <el-button type="primary">确定</el-button>
</div>
<div class="right"><el-button type="success">导出</el-button></div>
    </div>
</template>
<script>
import example from '../../uilt/Example';
export default {
    data:function()
    {
        return {
            roomlist:[],
            roomValue:'',
            start:'',
            end:'',
        }
    },
    mounted:function()
    {
        this.init();
    },
    methods:{
        init:function()
        {
            this.roomlist = example.getSelectRoomOptions();
        }
    }
}
</script>

<style>
.select-charts-wrapper {
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 98%;
  height: 100%;
  
}
</style>
