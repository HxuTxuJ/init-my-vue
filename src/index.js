//入口文件
import Vue from 'vue'

import app from './App.vue'

//导入 index.css 样式
import './css/index.css'

//导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)

//按需导入 Mint-UI 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入 mui 组件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的router
import router from './router.js'

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router   // 4. 将路由对象挂载到 vm 上
})
