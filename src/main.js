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
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside,
  Main, Menu, Submenu, MenuItemGroup, MenuItem,Breadcrumb,BreadcrumbItem,
  Card,Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog,MessageBox
} from "element-ui"
import "./assets/fonts/iconfont.css"

Vue.prototype.axios = axios;
//配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
// axios的请求拦截器，用来在request请求头header中添加token信息
// 每次axios请求都会调用它
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
})


Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.use(less)
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
