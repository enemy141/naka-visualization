<template>
  <Skeleton active  v-if="reload != true"/>
  <div
    v-if="reload"
    style="background: #e28743; padding: 15px; border-radius: 5px"
  >
    <Card class="style-card">
      <Statistic title="GameTransaction" :value="card_TotalTransaction"
    /></Card>
  </div>
</template>

<script>
import { Card, Statistic } from "ant-design-vue";
import {Skeleton} from "ant-design-vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    Card,
    Statistic,
    Skeleton
  },
  data() {
    return { reload: false, card_TotalTransaction: Number };
  },
  async created() {
    const ad = await axios
      .get(process.env.VUE_APP_API + "/api/data/transaction-count")
      .then((res) => {
        const result = res.data.result;
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    this.card_TotalTransaction = ad;
    setTimeout(() => {
      this.reload = true;
    }, 1000);
  },
  setup() {
    return {};
  },
});
</script>

<style>
.style-card {
  border-radius: 5px;
}
</style>
