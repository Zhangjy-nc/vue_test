// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs';
import less from 'less'
//导入全局样式表 好像只有在vue中可以用js直接导入css
import './assets/css/global.css'
import {Button,Form ,FormItem,Input,Message} from "element-ui"
import "./assets/fonts/iconfont.css"

Vue.prototype.axios = axios; 
//配置请求的根路径
axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/"
Vue.prototype.qs = qs 
Vue.config.productionTip = false
Vue.use(less)
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.prototype.$message = Message



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
