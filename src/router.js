import Vue from 'vue'
import Router from 'vue-router'

import Payments from "./pages/pPayments.vue";

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    component: Payments
  }]
})
