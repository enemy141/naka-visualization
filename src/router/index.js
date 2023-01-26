import  {createRouter,createWebHistory}from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePage'
import PageNotFound from '@/pages/PageNotFound'

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/home', component: HomePage},
    { path: "/:catchAll(.*)", component: PageNotFound}
  ]

const router = createRouter({
    routes: routes,
    history: createWebHistory("/")
})

export default router