<template>
  <Skeleton active  v-if="reload != true"/>
  <highcharts v-if="reload" :options="chartOptions" :key="reload"></highcharts>
</template>

<script>
import { Chart } from "highcharts-vue";
import { defineComponent } from "vue";
import {Skeleton} from "ant-design-vue";
import axios from "axios";

export default defineComponent({
  components: {
    highcharts: Chart,
    Skeleton
  },
  async created() {
    const data = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-game")
      .then((res) => {
        const gamedata = res.data.result;
        const frequency = [];
        gamedata.forEach(function (data) {
          frequency[data] = frequency[data] ? frequency[data] + 1 : 1;
        });
        const frequencyArray = Object.entries(frequency);

        const sortedFrequencyArray = frequencyArray.sort(function (a, b) {
          return b[1] - a[1];
        });

        const sortedFrequency = sortedFrequencyArray.reduce(function (
          acc,
          pair
        ) {
          acc[pair[0]] = pair[1];
          return acc;
        },
        {});

        const result = Object.entries(sortedFrequency).map(([name, count]) => ({
          name,
          y: count,
        }));

        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    this.chartOptions.series[0].data = data;
    setTimeout(() => {
      this.reload = true;
    }, 1000);
  },

  data() {
    return {
      reload: false,
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "Gameplayed",
          align: "left",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [],
          },
        ],
      },
    };
  },
});
</script>

<style></style>
