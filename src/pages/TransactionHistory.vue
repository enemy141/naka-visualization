<template>
  <Layout style="height: 230vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="height: 8vh" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1" @click="home">
          <InsertRowAboveOutlined />
          <span>Dashboad</span>
        </MenuItem>
        <MenuItem key="2">
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
          margin: '30px 15px',
          padding: '25px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Divider orientation="left"></Divider>
        <div class="box-custom">
          <div style="display: flex">
            <div style="flex: 1" class="column-custom">
              <HistoryTransaction />
            </div>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import HistoryTransaction from "@/components/HistoryTransaction.vue";

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
    HistoryTransaction,
  },
  methods: {
    home() {
      router.push("/home");
    },
    dataHis(){
      router.push("/data")
    },
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
</style>
