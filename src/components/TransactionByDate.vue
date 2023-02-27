<template>
  <Space direction="vertical">
    <DatePicker @change="dateTime" v-model:value="value1"/>
    <Space direction="horizontal">
      <Card class="style-card">
        <Statistic
          title="tranToday"
          :value="tranCountToday"
          style="margin-right: 100px"
      /></Card>
      <Card class="style-card">
        <Statistic
          title="tranYesterday"
          :value="tranCountYesterday"
          style="margin-right: 100px"
      /></Card>
      <Card class="style-card">
        <Statistic
          title="different"
          :value="different"
          style="margin-right: 100px"
      /></Card>
    </Space>
  </Space>
</template>
<script>
import moment from "moment";
import dayjs from "dayjs";
import { DatePicker, Space, Card, Statistic } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    DatePicker,
    Space,
    Card,
    Statistic,
  },
  methods: {
    async dateTime(value) {
      this.today = value.format("YYYY-MM-DD");
      this.yesterday = value.subtract(1, "days").format("YYYY-MM-DD");
      this.tomrrowday = value.subtract(-1, "days").format("YYYY-MM-DD");

      const dataToday = await axios
        .post(process.env.VUE_APP_API + "/api/data/transaction-date", {
          date: this.today,
          range: this.tomrrowday,
        })
        .then((res) => {
          const result = res.data.result;
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
      const dataYesterday = await axios
        .post(process.env.VUE_APP_API + "/api/data/transaction-date", {
          date: this.yesterday,
          range: this.today,
        })
        .then((res) => {
          const result = res.data.result;
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
      this.tranCountToday = dataToday;
      this.tranCountYesterday = dataYesterday;
      this.different = dataToday - dataYesterday;
    },
  },
  setup() {
    const dateFormat = "YYYY-MM-DD";
    return { value1: ref(dayjs("2022-03-01", dateFormat)) };
  },
  data() {
    return {
      today: moment().format("YYYY-MM-DD"),
      yesterday: moment().subtract(1, "days").format("YYYY-MM-DD"),
      tomrrowday: moment().subtract(-1, "days").format("YYYY-MM-DD"),
      tranCountToday: 0,
      tranCountYesterday: 0,
      different: 0,
    };
  },
});
</script>
<style></style>
