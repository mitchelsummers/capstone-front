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
import Logout from "../views/Logout.vue";
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
  { path: "/cards/:id/edit", name: "CardsEdit", component: CardsEdit },
  { path: "/cards", name: "CardsIndex", component: CardsIndex },
  { path: "/newcard", name: "CardsNew", component: CardsNew },
  { path: "/cards/:id", name: "CardsShow", component: CardsShow },
  { path: "/courses/:id/edit", name: "CoursesEdit", component: CoursesEdit },
  { path: "/courses", name: "CoursesIndex", component: CoursesIndex },
  { path: "/newcourse", name: "CoursesNew", component: CoursesNew },
  { path: "/courses/:id", name: "CoursesShow", component: CoursesShow },
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/user", name: "UserHome", component: UserHome },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
