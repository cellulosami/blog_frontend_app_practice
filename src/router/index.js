import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostsShow from '../views/PostsShow.vue'
import PostsNew from '../views/PostsNew.vue'
import PostsEdit from '../views/PostsEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sample',
    name: 'Sample',
    component: () => import('../views/Sample.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/PostsIndex.vue')
  },
  {
    path: '/posts/new',
    name: 'Posts New',
    component: PostsNew
  },
  {
    path: '/posts/:id',
    name: 'Posts Show',
    component: PostsShow
  },
  {
    path: '/posts/:id/edit',
    name: 'Posts Edit',
    component: PostsEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
