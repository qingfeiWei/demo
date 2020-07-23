import Vue from 'vue'
import Router from 'vue-router'
import mail from "../Page/mail/mail";
import foot from "../components/foot/foot";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/unit',
      name: 'unit',
      component: mail
    },
    {
      path: '/',
      name: 'foot',
      component: foot
    }
  ]
})
