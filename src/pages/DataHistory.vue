<template>
  <div>
    <Divider orientation="left"></Divider>
    <div class="box-custom">
      <div style="flex: 1; display: flex; align-items: center">
        <div style="flex: 1" class="container-custom"><ColumnChart /></div>
      </div>
    </div>
  </div>
</template>
<script>
import ColumnChart from "@/components/ColumnChart.vue";
import { Divider } from "ant-design-vue";
import { defineComponent} from "vue";

export default defineComponent({
  components: {
    Divider,
    ColumnChart,
  }
});
</script>
<style></style>
