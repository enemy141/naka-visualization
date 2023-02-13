<template>
    <div id="content">
  <div id="form-box">
    <Form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormItem
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <Input v-model:value="formState.email" />
      </FormItem>

      <FormItem
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <InputPassword v-model:value="formState.password" />
      </FormItem>

      <FormItem name="remember">
        <Checkbox v-model:checked="formState.remember">Remember me</Checkbox>
      </FormItem>

      <FormItem>
        <Button  type="primary" html-type="submit" block>Login</Button>
      </FormItem>
    </Form>
  </div>
</div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import axios from "axios";
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Checkbox,
  Button,
  message
} from "ant-design-vue";
import router from '@/router'


export default defineComponent({
  components: { Form, FormItem, Input, InputPassword, Checkbox, Button },
  setup() {
    const formState = reactive({
      email: "ppp@mail.com",
      password: "1234",
      remember: true,
    });
    const onFinish = (values) => {
        console.log(process.env.VUE_APP_API,values)
        axios.post(process.env.VUE_APP_API + "/api/auth/login",{email : formState.email,password : formState.password})
        .then((res) => {
            //console.log(res)
            if (res.data.status == true){
                message.success('Login successful')
                localStorage.setItem("token",res.data.token)
                router.push('/home')
            }else{
                message.error(res.data.message)
            }
        })
    };
    const onFinishFailed = (errorInfo) => {
        alert("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style>
#content {
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    

}
#form-box {
    width: 450px;
}

</style>