<template>
  <div style="background: #ececec; padding: 30px">
    <Card>
      <Statistic
        title="GameTransaction"
        :value="card_gameplayTran"
        style="margin-right: 100px"
    /></Card>
  </div>
</template>

<script>
import { Card, Statistic } from "ant-design-vue";
import { defineComponent } from "vue";
const card_gameplayTran = 112893;

export default defineComponent({
  components: {
    Card,
    Statistic,
  },
  setup() {
    return {
      card_gameplayTran,
    };
  },
});
</script>

<style></style>
