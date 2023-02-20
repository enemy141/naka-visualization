<template>
  <Layout style="height: 125vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="@/assets/logo-naka.svg" />
        <img
          style="width: 50%"
          v-if="collapsed != true"
          src="@/assets/logo-naka-text.svg"
        />
      </div>
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1" @click="goTo('/home')">
          <InsertRowAboveOutlined />
          <span>Dash Boad</span>
        </MenuItem>
        <MenuItem key="2" @click="goTo('/home/transaction')">
          <InsertRowRightOutlined />
          <span>Trasaction History</span>
        </MenuItem>
        <MenuItem key="3" @click="goTo('/home/data')">
          <BarChartOutlined />
          <span>Data History</span>
        </MenuItem>
        <MenuItem key="4" style="margin-top: 90vh;" @click="logout">
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
        <router-view></router-view>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  BarChartOutlined,
  InsertRowAboveOutlined,
  InsertRowRightOutlined,
} from "@ant-design/icons-vue";
import router from "@/router";
import {
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  message,
} from "ant-design-vue";

import { defineComponent, ref } from "vue";

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
  },
  setup() {
    const value = ref();
    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };
    const logout = () => {
      localStorage.removeItem("token");
      message.success("Logout successful");
      router.push("/login");
    };
    const goTo = (path) => {
      router.push(path);
    };

    return {
      goTo,
      logout,
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

.site-layout .site-layout-background {
  background: #fff;
}

.logo {
  padding: 5px 0px 5px 0px;
  display: flex;
  justify-content: center;
}
</style>
