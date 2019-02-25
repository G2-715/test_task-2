import Vue from 'vue'
import Router from 'vue-router'

import Payments from "./pages/pPayments.vue";
import Successful from "./pages/pSuccessful.vue";
import History from "./pages/pHistory.vue";

import store from "./store";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/payments",
      component: Payments
    },
    {
      path: "/successful",
      component: Successful
    },
    {
      path: "/history",
      component: History
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/successful" && !store.state.token) {
    console.log(store.state.token);
    next("/payments");
  } else if (to.path === "/payments") {
    store.commit("RESET_ALL");
    next();
  }
  else next();
})

export default router;
