import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
const routes = [
  {
    path: "/",
    components: Home,
    name: "home",
  },
  {
    path: "/About",
    components: About,
    name: "about",
  },
  {
    path: "/Contacts",
    components: Products,
    name: "contacts",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
