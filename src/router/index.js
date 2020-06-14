import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/login.vue'
import Register from '@/components/register/register.vue'
import Home from '@/components/home/home.vue'
import Userlist from '@/components/user/userlist.vue'
import Rightslist from '@/components/rights/rightslist.vue'
import Rolelist from '@/components/role/rolelist.vue'
import Goodslist from '@/components/goods/goodslist.vue'
import Goodsedit from '@/components/goods/goodsedit.vue'
import Classparams from '@/components/goods/classparams.vue'
import Goodsclass from '@/components/goods/goodsclass.vue'
import Orderlist from '@/components/order/orderlist.vue'
import Dataform from '@/components/data/dataform.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home',
    component: Home, 
    children: [{ path: '/userlist', 
    component: Userlist }, { 
    path: '/rightslist', 
    component: Rightslist }, { 
    path: '/rolelist', 
    component: Rolelist }, {
    path: '/goodslist',
    component: Goodslist
    }, {
    path: '/goodsedit',
    component: Goodsedit
    }, {
    path: '/classparams',
    component: Classparams
    }, {
    path: '/goodsclass',
    component: Goodsclass
    }, {
    path: '/orderlist',
    component: Orderlist
    }, {
    path: '/dataform',
    component: Dataform
    }] }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next();
  }else{
    const token = localStorage.getItem("token");
    if (!token) {
      router.push({ path: "/login" });
      return
    }
  }
  next();
})

export default router
