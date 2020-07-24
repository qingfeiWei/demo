import Vue from 'vue'
import Router from 'vue-router'
import mail from "../Page/mail/mail";
import foot from "../components/foot/foot";
import person from "../Page/person/person";
import home from "../Page/home/home";

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
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
