<template>
  <Skeleton active  v-if="reload != true"/>
  <div style="max-height: 350px;" >
    <Table v-if="reload" :columns="table_columns" :data-source="countryData" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Transaction per country</template>
      <template #footer></template>
    </Table>
  </div>
</template>

<script>
import { Table } from "ant-design-vue";
import axios from "axios";
import {Skeleton} from "ant-design-vue";
import { defineComponent } from "vue";

const table_columns = [
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "transaction",
    className: "column-account",
    dataIndex: "transaction",
  },
];

export default defineComponent({
  name: "GameTransaction",
  components: { Table,Skeleton },
  data() {
    return {reload:false, countryData: [] };
  },
  async created() {
    const cd = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-nation")
      .then((res) => {
        const countries = res.data.result;
        const frequency = {};
        countries.forEach(function (country) {
          frequency[country] = frequency[country] ? frequency[country] + 1 : 1;
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

        const result = Object.entries(sortedFrequency).map(
          ([country, count], index) => ({
            key: index + 1,
            country,
            transaction: count,
          })
        );

        //console.log(result)
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    this.countryData = cd;
    setTimeout(() =>{this.reload = true
      },1000)
  },
  setup() {
    return { table_columns };
  },
});
</script>

<style></style>
