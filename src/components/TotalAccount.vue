<template>
  <Skeleton active  v-if="reload != true"/>
  <div
    v-if="reload"
    style="background: #e28743; padding: 15px; border-radius: 5px"
  >
    <Card class="style-card">
      <Statistic title="TotalAccount" :value="card_TotalAccount"
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
    return { reload: false, card_TotalAccount: Number };
  },
  async created() {
    const ad = await axios
      .get(process.env.VUE_APP_API + "/api/data/username-count")
      .then((res) => {
        const result = res.data.result;
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    this.card_TotalAccount = ad;
    setTimeout(() => {
      this.reload = true;
    }, 1000);
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
