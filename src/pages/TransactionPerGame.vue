<template>
  <div>
    <Divider orientation="left"></Divider>
    <div class="box-custom">
      <div style="flex: 1; display: flex; align-items: center">
        <div style="flex: 1" class="container-custom"><ColumnChart /></div>
      </div>
      <div style="flex: 1; display: flex; align-items: center">
        <div style="flex: 1" class="container-custom"><TransactionByDate /></div>
      </div>
    </div>
  </div>
</template>
<script>
import ColumnChart from "@/components/ColumnChart.vue";
import TransactionByDate from "@/components/TransactionByDate.vue"
import { Divider } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Divider,
    ColumnChart,
    TransactionByDate
  },
});
</script>
<style></style>
