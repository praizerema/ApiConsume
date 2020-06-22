import Vue from 'vue'
import Router from 'vue-router'
import ListUsers from '@/components/ListUsers'
import UserPost from '@/components/UserPost'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListUsers',
      component: ListUsers
    },
    {
      path: '/userpost',
      name: 'UserPost',
      component: UserPost
    }
  ]
})
