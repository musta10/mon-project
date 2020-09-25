import Vue from "vue";
import VueRouter from 'vue-router'

import home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(VueRouter)


const routes = [

     {
         path: '/',
         name: 'home',
         component: home
     },

    {
        path: '/Dashboard',
        name: "Dashboard",
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;