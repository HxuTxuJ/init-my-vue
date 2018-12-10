//入口文件
import Vue from 'vue'

import app from './App.vue'

//导入 index.css 样式
import './css/index.css'

//按需导入 Mint-UI 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入 mui 组件
import './lib/mui/css/mui.css'

// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 3. 创建路由对象
var router = new VueRouter({
	routes: [
		
	]
})

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router   // 4. 将路由对象挂载到 vm 上
})

console.log(123)