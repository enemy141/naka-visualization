<template>
  <div v-if="reload" style="background: #ececec; padding: 15px">
    <Card>
      <Statistic
        title="TotalAccount"
        :value="card_TotalAccount"
      
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
    return {reload: false, card_TotalAccount: Number };
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
