<template>
    <div class="select-calendar-component">
        <calendar @isToday="getToday" @choseDay="choseDay" />
    </div>
</template>
<script>
import calendar from "vue-calendar-component";
export default {
  data: function() {
    return {
      value: ""
    };
  },
  mounted: function() {},
  methods: {
    getToday: function(value) {
      this.$store.commit("setToday", value);
    },
    choseDay: function(value) {
      this.$store.commit("setToday", value);
    }
  },
  components: {
    calendar
  }
};
</script>
