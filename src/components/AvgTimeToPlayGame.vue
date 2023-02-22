<template>
  <div>
    <Table v-if="reload" :columns="table_columns" :data-source="avgGameTime" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Average time per game</template>
      <template #footer></template>
    </Table>
  </div>
</template>

<script>
import { Table } from "ant-design-vue";
import axios from "axios";
import { defineComponent } from "vue";

const table_columns = [
  {
    title: "Game",
    dataIndex: "game",
  },
  {
    title: "average time",
    className: "column-avgtime",
    dataIndex: "avg",
  },
];

export default defineComponent({
  name: "GameTransaction",
  components: { Table },
  data() {
    return {reload: false, avgGameTime: [] };
  },
  async created() {
   const avg = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-timeplay")
      .then((res) => {
        const avgGame = res.data.result;

        const grouped = avgGame.reduce((acc, curr) => {
          acc[curr[0]] = acc[curr[0]] || [];
          acc[curr[0]].push(curr[1]);
          return acc;
        }, {});

        const means = Object.entries(grouped).reduce((acc, [key, values]) => {
          acc[key] =
            values.reduce((sum, value) => sum + value, 0) / values.length;
          return acc;
        }, {});

        const meansArray = Object.entries(means);
        const sortedArray = meansArray.sort(function (a, b) {
          return b[1] - a[1];
        });

        const sorted = sortedArray.reduce(function (acc, pair) {
          acc[pair[0]] = pair[1];
          return acc;
        }, {});

        const result = Object.entries(sorted).map(
          ([game, count], index) => ({
            key: index + 1,
            game,
            avg: count.toFixed(3),
          })
        );
        return result
      })
      .catch((error) => {
        console.log(error);
      });
    this.avgGameTime = avg;
    setTimeout(() =>{this.reload = true
      },1000)
  },
  setup() {
    return { table_columns };
  },
});
</script>

<style></style>
