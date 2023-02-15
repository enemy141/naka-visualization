<template>
  <div style="overflow: auto; max-height: 350px">
    <Table
      v-if="reload"
      :columns="table_columns"
      :data-source="transactionData"
      bordered
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Transaction History</template>
      <template #footer></template>
    </Table>
  </div>
</template>

<script>
import { Table } from "ant-design-vue";
import axios from "axios";
import { defineComponent } from "vue";

const table_columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Player count",
    dataIndex: "player_count",
  },
  {
    title: "Transaction count",
    dataIndex: "transaction_count",
  },
  {
    title: "game per player",
    dataIndex: "game_per_player",
  }
];

export default defineComponent({
  name: "GameTransaction",
  components: { Table },
  data() {
    return { reload: false, transactionData: [] };
  },
  async created() {
   const data = await axios
      .get(process.env.VUE_APP_API + "/api/data/transaction-history")
      .then((res) => {
        const tranArray = res.data.data;

        let output = tranArray.map((obj, index) => {
          return {
            key: index + 1,
            date: obj._id,
            player_count: obj.player_count,
            transaction_count: obj.transaction_count,
            game_per_player: obj.game_per_player,
          };
        });

        //console.log(output);
        return output;
      })
      .catch((error) => {
        console.log(error);
      });
    this.transactionData = data;
    setTimeout(() => {
      this.reload = true;
    }, 1000);
  },
  setup() {
    return { table_columns };
  },
});
</script>

<style></style>
