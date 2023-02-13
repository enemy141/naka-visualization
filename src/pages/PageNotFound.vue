<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button type="primary" @click="home">Back Home</Button>
    </template>
  </Result>
</template>

<script>
import { defineComponent } from "vue";
import {Result,Button} from "ant-design-vue"
import router from '@/router'
export default defineComponent({
    components : {Result,Button},
    methods :{
      home() {
        router.push('/home')
      }
    }
});
</script>

<style></style>
