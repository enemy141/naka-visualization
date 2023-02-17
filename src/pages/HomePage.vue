<template>
  <Layout style="height: 125vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="height: 8vh" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1">
          <InsertRowAboveOutlined />
          <span>Dashboad</span>
        </MenuItem>
        <MenuItem key="2" @click="tranHis">
          <InsertRowRightOutlined />
          <span>Trasaction History</span>
        </MenuItem>
        <MenuItem key="3" @click="dataHis">
          <BarChartOutlined />
          <span>Data History</span>
        </MenuItem>
        <MenuItem key="4" @click="logout">
          <poweroff-outlined />
          <span>Log out</span>
        </MenuItem>
      </Menu>
    </LayoutSider>
    <Layout>
      <LayoutHeader style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </LayoutHeader>
      <LayoutContent
        :style="{
          margin: '15px 10px',
          padding: '10px',
          background: '#ececec',
          minHeight: '300px',
        }"
      >
        <Divider orientation="left"></Divider>
        <div class="box-custom">
          <div style="display: flex">
            <div style="flex: 2" class="column-custom"><WordCloud /></div>
            <div style="flex: 2" class="column-custom">
              <TransactionConuntry />
            </div>
            <div
              style="flex: 1; display: flex; align-items: center"
              class="column-custom"
            >
              <div style="width: 100%">
                <div style="margin: 5px"><GameTransaction /></div>
                <div style="margin: 5px"><TotalAccount /></div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-custom">
          <div style="display: flex">
            <div
              style="flex: 1; display: flex; align-items: center"
              class="column-custom"
            >
              <div style="width: 100%">
                <div style="margin: 5px"><F2PPlayed /></div>
                <div style="margin: 5px"><PaidGames /></div>
              </div>
            </div>
            <div style="flex: 2" class="column-custom">
              <AvgTimeToPlayGame />
            </div>
            <div style="flex: 2" class="column-custom"><RadiusPie /></div>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import WordCloud from "@/components/WordCloud.vue";
import RadiusPie from "@/components/RadiusPie.vue";
import GameTransaction from "@/components/GameTransaction.vue";
import TotalAccount from "@/components/TotalAccount.vue";
import F2PPlayed from "@/components/F2PPlayed.vue";
import PaidGames from "@/components/PaidGames.vue";
import TransactionConuntry from "@/components/TransactionCountry.vue";
import AvgTimeToPlayGame from "@/components/AvgTimeToPlayGame.vue";

import {
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  Divider,
  message,
} from "ant-design-vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  BarChartOutlined,
  InsertRowAboveOutlined,
  InsertRowRightOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import router from "@/router";

export default defineComponent({
  components: {
    Layout,
    LayoutSider,
    LayoutHeader,
    LayoutContent,
    Menu,
    MenuItem,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined,
    BarChartOutlined,
    InsertRowAboveOutlined,
    InsertRowRightOutlined,
    Divider,
    TransactionConuntry,
    GameTransaction,
    TotalAccount,
    F2PPlayed,
    PaidGames,
    RadiusPie,
    WordCloud,
    AvgTimeToPlayGame,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      message.success("Logout successful");
      router.push("/login");
    },
    dataHis() {
      router.push("/data");
    },
    tranHis() {
      router.push("/transaction");
    },
  },
  setup() {
    const value = ref();
    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };

    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
      value,
      onPanelChange,
    };
  },
});
</script>
<style>


::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

.column-custom {
  background-color: #fff;
   border-style: solid;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: #d6dee1;
  margin: 5px;
  padding: 10px;
  max-height: 350px;
  overflow: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

th.column-account,
td.column-account {
  text-align: right !important;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
