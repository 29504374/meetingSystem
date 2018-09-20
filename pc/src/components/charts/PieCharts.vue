<template>
    <div class="pie-wrapper" ref="pieWrapper">
        <div class="pie-main" ref="pieMain">

        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      pieWrapperWidth: 0,
      pieWrapperHeight: 0,
      pie:'',
    };
  },
  mounted: function() {
      
  },
  methods: {
      init:function(value)
      {
          console.log(value);
          this.$refs.pieMain.id = value;
          this.pieMap(value);
      },
      pieMap:function(value)
      {
         let option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
       
        x : 'center',
        y:'bottom',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
           
            
        }
    },
    
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
this.$refs.pieMain.style.width =
        this.$refs.pieWrapper.offsetWidth + "px";
      this.$refs.pieMain.style.height =
        this.$refs.pieWrapper.offsetHeight + "px";
                 this.pie = this.$echarts.init(document.getElementById(value));  
      this.pie.setOption(option);
      },
      resizes:function()
  {
      this.$refs.pieMain.style.width =
        this.$refs.pieWrapper.offsetWidth + "px";
      this.$refs.pieMain.style.height =
        this.$refs.pieWrapper.offsetHeight + "px";
        this.pie.resize();
  },
  }
  
};
</script>

<style>
.pie-wrapper {
  width: 100%;
  height: 100%;
}
</style>

