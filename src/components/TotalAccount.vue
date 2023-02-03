<template>
  <div style="background: #ececec; padding: 30px">
    <Card>
      <Statistic
        title="TotalAccount"
        :value="card_TotalAccount"
        style="margin-right: 100px"
    /></Card>
  </div>
</template>

<script>
import { Card, Statistic } from "ant-design-vue";
import { defineComponent } from "vue";
const card_TotalAccount = 112893;

export default defineComponent({
  components: {
    Card,
    Statistic,
  },
  setup() {
    return {
      card_TotalAccount,
    };
  },
});
</script>

<style></style>
