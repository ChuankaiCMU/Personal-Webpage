import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Construction from '@/components/Temppage'
import Research from '@/components/Research'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMq from 'vue-mq'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/Construction',
      name: 'Construction',
      component: Construction
    },
    {
      path: '/Research',
      name: 'Research',
      component: Research
    }
  ]
})
