<template><highcharts :options="chartOptions"></highcharts></template>

<script>
import { Chart } from "highcharts-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Entire title",
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5],
          },
        ],
      },
    };
  },
});
</script>

<style></style>
