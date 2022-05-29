import Vue from 'vue';
import Router from 'vue-router';

//解决vue-router重复点击报错问题（this.$router.replace()）
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err);
};
//解决vue-router重复点击报错问题（this.$router.push()）
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};


Vue.use(Router);

const Enter = () => import('../pages/Index.vue');

const routes = [
  {
    path: "/",
    redirect: "/enter"
  },
  {
    path: "/login",
    component: () => import('../pages/Login.vue')
  },
  {
    path: "/enter",
    component: Enter,
    children: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        component: () => import('../pages/Home/Home.vue')
      },
      {
        path: "/search",
        component: () => import('../pages/Search.vue')
      },
      {
        path: "/cart",
        component: () => import('../pages/Cart.vue')
      },
      {
        path: "/my",
        component: () => import('../pages/My.vue')
      }
    ]
  },
  {
    path: "/404",
    component: () => import('../pages/NotFound.vue')
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new Router({
  routes,
  mode: "history"
});
export default router;
