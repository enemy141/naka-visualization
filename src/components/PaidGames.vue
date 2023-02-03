<template>
  <div style="background: #ececec; padding: 30px">
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
const paidGame = 112893;

export default defineComponent({
  components: {
    Card,
    Statistic,
  },
  setup() {
    return {
      paidGame,
    };
  },
});
</script>

<style></style>
