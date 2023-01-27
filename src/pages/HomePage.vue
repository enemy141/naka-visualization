<template>
  <Layout style="height: 100vh">
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" style="height: 8vh" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1">
          <user-outlined />
          <span>nav 1</span>
        </MenuItem>
        <MenuItem key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </MenuItem>
        <MenuItem key="3">
          <upload-outlined />
          <span>nav 3</span>
        </MenuItem>
      </Menu>
    </LayoutSider>
    <Layout style="height: 100vh">
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
        <div
          :style="{
            width: '300px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
          }"
        >
          <Calendar
            v-model:value="value"
            :fullscreen="false"
            @panelChange="onPanelChange"
          />
        </div>
        <div style="background: #ececec; padding: 30px">
          <Card title="Card title" :bordered="false" style="width: 300px">
            <div>
              <Row>
                <Col :span="12">
                  <Statistic
                    title="Active Users"
                    :value="112893"
                    style="margin-right: 50px"
                  />
                </Col>
                <Col :span="12">
                  <Statistic
                    title="Account Balance (CNY)"
                    :precision="2"
                    :value="112893"
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script>
import {
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  Calendar,
  Col,
  Row,
  Statistic,
  Card,
} from "ant-design-vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
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
    Calendar,
    Col,
    Row,
    Statistic,
    Card,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
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
