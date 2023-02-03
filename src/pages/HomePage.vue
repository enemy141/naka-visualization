<template>
  <Layout style="height: 200vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="height: 8vh" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1">
          <user-outlined />
          <span>DashBoard</span>
        </MenuItem>
        <MenuItem key="2">
          <video-camera-outlined />
          <span>Chart</span>
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
        <Row  justify="space-between">
          <Col :span="6"><WordCloud /></Col>
          <Col :span="6"><AccountConuntry /></Col>
          <Col :span="6"><Row><GameTransaction /></row><Row><TotalAccount /></row></Col>
        </Row>
        <Row  justify="space-between">
          <Col :span="6"><Row><F2PPlayed /></row><Row><PaidGames /></row></Col>
          <Col :span="6"><AccountConuntry /></Col>
          <Col :span="6"><RadiusPie /></Col>
        </Row>
        <Col :span="25"><ColumnChart /></Col>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import ColumnChart from "@/components/ColumnChart.vue";
import WordCloud from "@/components/WordCloud.vue";
import RadiusPie from "@/components/RadiusPie.vue";
import GameTransaction from "@/components/GameTransaction.vue";
import TotalAccount from "@/components/TotalAccount.vue";
import F2PPlayed from "@/components/F2PPlayed.vue";
import PaidGames from "@/components/PaidGames.vue";
import AccountConuntry from "@/components/AccountCountry.vue";

import {
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  Divider,
  Row,
  Col,
} from "ant-design-vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Layout,
    LayoutSider,
    LayoutHeader,
    LayoutContent,
    Menu,
    MenuItem,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Divider,
    Col,
    Row,
    AccountConuntry,
    GameTransaction,
    TotalAccount,
    F2PPlayed,
    PaidGames,
    RadiusPie,
    WordCloud,
    ColumnChart
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
