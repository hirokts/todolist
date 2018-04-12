import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-page',
      component: require('@/components/ToDo').default
    },
    {
      path: '/next',
      name: 'next-page',
      component: require('@/components/Next').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
