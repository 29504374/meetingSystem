<template>
    <div class="stacked-wrapper" ref="stackedWrapper">
        <div id="stacked-main" ref="stackedMain"></div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      wrapperWidth: 0,
      wrapperHeight: 0,
      stacked: ""
    };
  },
  mounted: function() {
    this.stackedMap();
  },
  methods: {
    stackedMap: function() {
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "09-01",
            "09-02",
            "09-03",
            "09-04",
            "09-05",
            "09-06",
            "09-07",
            "09-08",
            "09-09",
            "09-10",
            "09-11",
            "09-12",
            "09-13",
            "09-14",
            "09-15",
            "09-16",
            "09-17",
            "09-18",
            "09-19",
            "09-20",
            "09-21",
            "09-22",
            "09-23",
            "09-24",
            "09-25",
            "09-26",
            "09-27",
            "09-28",
            "09-29",
            "09-30",
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320,530,450,236,1252,125,504,895,336,478,459,852,167,888,236,548,699,544,1111,1666,475,888,665,985,475,632,745,556,555],
            type: "line",
            smooth: true,
            areaStyle: {}
          }
        ]
      };
      this.$refs.stackedMain.style.width =
        this.$refs.stackedWrapper.offsetWidth + "px";
      this.$refs.stackedMain.style.height =
        this.$refs.stackedWrapper.offsetHeight + "px";
      this.stacked = this.$echarts.init(
        document.getElementById("stacked-main")
      );
      this.stacked.setOption(option);
    },
    resizes: function() {
      this.$refs.stackedMain.style.width =
        this.$refs.stackedWrapper.offsetWidth + "px";
      this.$refs.stackedMain.style.height =
        this.$refs.stackedWrapper.offsetHeight + "px";
      this.stacked.resize();
    }
  }
};
</script>

<style>
.stacked-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 0px 10px #e5e5e5;
}
</style>
