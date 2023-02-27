<template>
  <div>
    <Divider orientation="left"></Divider>
    <div class="box-custom">
      <div style="flex: 1; display: flex; align-items: center">
        <div style="flex: 1" class="container-custom">
          <GameTransaction />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GameTransaction from "@/components/GameTransaction.vue";

import { Divider } from "ant-design-vue";
import { defineComponent} from "vue";

export default defineComponent({
  components: {
    Divider,
    GameTransaction,
  }
});
</script>
<style>
.container-custom {
  background-color: #fff;
  border-style: solid;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: #d6dee1;
  margin: 5px;
  padding: 10px;
  overflow: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
