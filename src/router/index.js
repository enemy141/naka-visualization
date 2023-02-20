import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage"
import Transaction from "@/pages/TransactionHistory";
import PageNotFound from "@/pages/PageNotFound";
import DataHistory from "@/pages/DataHistory";
import MainPage from "@/pages/MainPage";
import axios from "axios";

import { message } from "ant-design-vue";

const routes = [
  { path: "/login", name: "login", component: LoginPage },
  { path: "/home", name: "home", component: MainPage, children: [
    {
      path:"",
      component:HomePage
    },
    {
      path:"transaction",
      component: Transaction 
    },
    {
      path:"data",
      component:DataHistory
    }
  ] },
  { path: "/:catchAll(.*)", component: PageNotFound },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory("/"),
});

router.beforeEach((to, from, next) => {
  console.log("page change");
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired) {
    axios
      .post(
        process.env.VUE_APP_API + "/api/auth/verify",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        next();
      })
      .catch((error) => {
        message.error(error.response.data.error);
        localStorage.removeItem("token");
        next({ name: "login" });
      });
  } else {
    if (to.path == "/login" && localStorage.getItem("token") != null) {
      next({ name: "home" });
    }
    next();
  }

  /*if (authRequired && !user_store.$state.user) {
    return "/login";
  } else if (to.path == "/login" && user_store.$state.user) {
    return "/home";
  }*/
});

export default router;
