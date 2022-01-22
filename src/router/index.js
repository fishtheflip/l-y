import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllGoods from '../views/AllGoods.vue'
import BodyGoods from '../views/BodyGoods.vue'
import FaceGoods from '../views/FaceGoods.vue'
import LipsGoods from '../views/LipsGoods.vue'
import OtherGoods from '../views/OtherGoods.vue'
import BathGoods from '../views/BathGoods.vue'
import HairGoods from '../views/HairGoods.vue'
import Basket from '../views/Basket.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allgoods',
    name: 'AllGoods',
    component: AllGoods
  },
  {
    path: '/bodygoods',
    name: 'BodyGoods',
    component: BodyGoods
  },
  {
    path: '/facegoods',
    name: 'FaceGoods',
    component: FaceGoods
  },
  {
    path: '/lipsgoods',
    name: 'LipsGoods',
    component: LipsGoods
  },
  {
    path: '/othergoods',
    name: 'OtherGoods',
    component: OtherGoods
  },
  {
    path: '/bathgoods',
    name: 'BathGoods',
    component: BathGoods
  },
  {
    path: '/hairgoods',
    name: 'HairGoods',
    component: HairGoods
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
