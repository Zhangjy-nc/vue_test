import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import welcome from '@/components/welcome'
import users from '@/components/user/users'


Vue.use(Router)

// welcome为home的子路由，welcome是home组件的组件，children方法实现
const router = new Router({
  routes: [
    { path: '/login', component: login },
    { path: '/', redirect: '/login' },
    {
      path: '/home',
      component: home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: welcome },
      { path: '/users', component: users }
    ]
    },
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //next()放行 next("/login") 强制跳转 
  if (to.path == "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next('/login');
  next();
})

export default router
