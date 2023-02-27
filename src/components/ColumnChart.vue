<template>
  <Skeleton active  v-if="reload != true"/>
  <highcharts v-if="reload" :options="chartOptions"></highcharts>
</template>

<script>
import {Skeleton} from "ant-design-vue";
import { Chart } from "highcharts-vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    highcharts: Chart,
    Skeleton
  },
  async created() {
    await axios
      .get(process.env.VUE_APP_API + "/api/data/all-gameplay-date")
      .then((res) => {
        const dataArray = res.data.result;
        const date = [];
        const gameCount = [];
        for (let i in dataArray) {
          date.push(dataArray[i][0]);
          gameCount.push(dataArray[i][1]);
        }

        const output = [];
        const keys = new Set([]);

        for (const obj of gameCount) {
          for (const key in obj) {
            keys.add(key);
          }
        }

        for (const key of keys) {
          const data = [];
          for (const obj of gameCount) {
            data.push(obj[key] || 0);
          }
          output.push({ name: key, data });
        }

        this.chartOptions.series = output;
        this.chartOptions.xAxis.categories = date;
        setTimeout(() => {
          this.reload = true;
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      reload: false,
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Transaction per Game",
        },
        xAxis: {
          categories: ["2021/22", "2020/21", "2019/20", "2018/19", "2017/18"],
        },
        yAxis: {
          min: 0,
          title: {
            text: "Assists",
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true,
        },
        plotOptions: {
          column: {
            stacking: "percent",
          },
        },
        series: [],
      },
    };
  },
});
</script>

<style></style>
