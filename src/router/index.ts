import Vue from "vue";
import VueRouter from "vue-router";
import UserCreate from "../views/UserRegister.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UserList",
    component: UserList
  },
  {
    path: "/create",
    name: "UserCreate",
    component: UserCreate
  },
  {
    path: "/update/:id",
    name: "UserUpdate",
    component: UserUpdate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
