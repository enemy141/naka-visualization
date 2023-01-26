<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button type="primary">Back Home</Button>
    </template>
  </Result>
</template>

<script>
import { defineComponent } from "vue";
import {Result,Button} from "ant-design-vue"
export default defineComponent({
    components : {Result,Button}
});
</script>

<style></style>
