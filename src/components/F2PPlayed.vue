<template>
  <div style="background: #ececec; padding: 30px">
    <Card>
      <Statistic
        title="f2PGames"
        :value="f2p_game"
        style="margin-right: 100px"
    /></Card>
  </div>
</template>

<script>
import { Card, Statistic } from "ant-design-vue";
import { defineComponent } from "vue";
const f2p_game = 112893;

export default defineComponent({
  components: {
    Card,
    Statistic,
  },
  setup() {
    return {
      f2p_game,
    };
  },
});
</script>

<style></style>
