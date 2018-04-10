import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home page',
          component: Home
        }
      ]
    }
  ]
})
