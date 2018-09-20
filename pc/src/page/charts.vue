<template>
    <div class="charts-wrapper">
        <div class="charts-top-layout">
            <selectCharts />
        </div>
        <div class="charts-main-layout">
            <div class="stacked-layout">
                <stacked ref="stacked" />
            </div>
            <div class="pie-layout">
                <div class="left"><pie ref="pieleft" /></div>
                <div class="right"><pie ref="pieRight" /></div>
            </div>
        </div>
    </div>
</template>
<script>
import selectCharts from "./../components/charts/SelectCharts"
import stacked from "./../components/charts/StackedChart"
import pie from "./../components/charts/PieCharts"
export default {
    mounted:function()
    {
        this.$refs.pieleft.init('pie-left');
        this.$refs.pieRight.init('pie-right');
        window.addEventListener("resize",this.chartResizeHandler);
    },
    methods:{
        chartResizeHandler:function()
        {
            console.log("charts resize...");
            this.$refs.pieleft.resizes();
            this.$refs.pieRight.resizes();
            this.$refs.stacked.resizes();
        }
    },
    components:{
        selectCharts,
        stacked,
        pie,
    }
}
</script>

<style>
@import url("../style/global.css");
@import url("../style/charts.css");
</style>

