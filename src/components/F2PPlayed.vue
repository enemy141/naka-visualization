<template>
  <Skeleton active  v-if="reload != true"/>
  <div
    v-if="reload"
    style="background: #aafc5d; padding: 15px; border-radius: 5px"
  >
    <Card class="style-card">
      <Statistic title="F2PGames" :value="f2p_game" style="margin-right: 100px"
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
    return { reload: false, f2p_game: Number };
  },
  async created() {
    const data = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-play-to-earn")
      .then((res) => {
        const result = res.data.result;
        const f2p_data = result.filter((value) => !value);

        return f2p_data.length;
      })
      .catch((error) => {
        console.log(error);
      });
    this.f2p_game = data;
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
