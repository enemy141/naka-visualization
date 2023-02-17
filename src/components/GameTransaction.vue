<template>
  <div v-if="reload" style="background: #ececec; padding: 15px">
    <Card >
      <Statistic
        title="GameTransaction"
        :value="card_TotalTransaction"
        
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
    return {reload: false, card_TotalTransaction: Number };
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
