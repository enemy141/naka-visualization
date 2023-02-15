<template>
  <Layout style="height: 220vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="height: 8vh" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1" @click="logout">
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
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Divider orientation="left"></Divider>
        <div style="display: flex">
          <div style="flex: 1" class="column-custom"><WordCloud /></div>
          <div style="flex: 1" class="column-custom"><AccountConuntry /></div>
          <div style="flex: 1" class="column-custom">
            <div><GameTransaction /></div>
            <div><TotalAccount /></div>
          </div>
        </div>
        <div style="display: flex">
          <div style="flex: 1" class="column-custom">
            <div><F2PPlayed /></div>
            <div><PaidGames /></div>
          </div>
          <div style="flex: 1" class="column-custom"><AvgTimeToPlayGame /></div>
          <div style="flex: 1" class="column-custom"><RadiusPie /></div>
        </div>
        <div style="display: flex">
          <div style="flex: 1" class="column-custom"><HistoryTransaction /></div>
        </div>
        <div style="display: flex">
          <div style="flex: 1" class="column-custom"><ColumnChart /></div>
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import ColumnChart from "@/components/ColumnChart.vue";
import HistoryTransaction from "@/components/HistoryTransaction.vue";
import WordCloud from "@/components/WordCloud.vue";
import RadiusPie from "@/components/RadiusPie.vue";
import GameTransaction from "@/components/GameTransaction.vue";
import TotalAccount from "@/components/TotalAccount.vue";
import F2PPlayed from "@/components/F2PPlayed.vue";
import PaidGames from "@/components/PaidGames.vue";
import AccountConuntry from "@/components/AccountCountry.vue";
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
    Divider,
    AccountConuntry,
    GameTransaction,
    TotalAccount,
    F2PPlayed,
    PaidGames,
    RadiusPie,
    WordCloud,
    ColumnChart,
    AvgTimeToPlayGame,
    HistoryTransaction
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      message.success("Logout successful");
      router.push("/login");
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
.column-custom {
  max-height: 350px;
  overflow: auto;
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
