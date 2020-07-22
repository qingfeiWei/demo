import Vue from 'vue'
import Router from 'vue-router'
import mail from "../Page/mail/mail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'unit',
      component: mail
    }
  ]
})
