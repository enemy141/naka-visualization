<template>
  <div>
    <Table :columns="table_columns" :data-source="table_data" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Count by country account</template>
      <template #footer>Footer</template>
    </Table>
  </div>
</template>

<script>
import { Table } from "ant-design-vue";
import { defineComponent } from "vue";

const table_columns = [
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "account",
    className: "column-account",
    dataIndex: "account",
  },
];
const table_data = [
  {
    key: "1",
    country: "Britain",
    account: "300,000.00",
  },
  {
    key: "2",
    country: "America",
    account: "1,256,000.00",
  },
  {
    key: "3",
    country: "Canada",
    account: "120,000.00",
  },
];
export default defineComponent({
  name: "GameTransaction",
  components: { Table },
  setup() {
    return {table_columns,table_data};
  },
});
</script>

<style></style>
