import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/BlogList'
import BlogEdit from '@/components/BlogEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blog'
    },
    {
      path: '/blog',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog/edit',
      name: 'BlogEdit',
      component: BlogEdit
    }
  ]
})
