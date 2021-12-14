import Vue from "vue";
import VueRouter from "vue-router";
import CardsEdit from "../views/CardsEdit.vue";
import CardsIndex from "../views/CardsIndex.vue";
import CardsNew from "../views/CardsNew.vue";
import CardsShow from "../views/CardsShow.vue";
import CoursesEdit from "../views/CoursesEdit.vue";
import CoursesIndex from "../views/CoursesIndex.vue";
import CoursesNew from "../views/CoursesNew.vue";
import CoursesShow from "../views/CoursesShow.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import UserHome from "../views/UserHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/CardsEdit", name: "CardsEdit", component: CardsEdit },
  { path: "/CardsIndex", name: "CardsIndex", component: CardsIndex },
  { path: "/CardsNew", name: "CardsNew", component: CardsNew },
  { path: "/CardsShow", name: "CardsShow", component: CardsShow },
  { path: "/CoursesEdit", name: "CoursesEdit", component: CoursesEdit },
  { path: "/CoursesIndex", name: "CoursesIndex", component: CoursesIndex },
  { path: "/CoursesNew", name: "CoursesNew", component: CoursesNew },
  { path: "/CoursesShow", name: "CoursesShow", component: CoursesShow },
  { path: "/", name: "Home", component: Home },
  { path: "/Login", name: "Login", component: Login },
  { path: "/Signup", name: "Signup", component: Signup },
  { path: "/UserHome", name: "UserHome", component: UserHome },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
