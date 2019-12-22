import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'

Vue.use(Router)

 const router = new Router({
  routes: [
    { path: '/login', component: login },
    { path: '/home', component: home },
    { path: '/', redirect: '/login' },
  ]
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //next()放行 next("/login") 强制跳转 
  if(to.path == "/login") return next();
  const tokenStr=window.sessionStorage.getItem("token");
  if(!tokenStr) return next('/login');
  next();
})

export default router
