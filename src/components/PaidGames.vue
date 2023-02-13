<template>
  <div v-if="reload" style="background: #ececec; padding: 30px">
    <Card>
      <Statistic
        title="PaidGame"
        :value="paidGame"
        style="margin-right: 100px"
    /></Card>
  </div>
</template>

<script>
import { Card, Statistic } from "ant-design-vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    Card,
    Statistic,
  },
  data() {
    return {reload: false, paidGame: Number };
  },
  async created() {
   const data = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-play-to-earn")
      .then((res) => {
        const result = res.data.result;
        const p_data = result.filter((value) => value);

        return p_data.length;
      })
      .catch((error) => {
        console.log(error);
      });
    this.paidGame = data;
    setTimeout(() =>{this.reload = true
      },1000)
  },
  setup() {
    return {
    };
  },
});
</script>

<style></style>
