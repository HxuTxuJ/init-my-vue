// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
import Vue from 'vue'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 3. 创建路由对象
var router = new VueRouter({
	routes: [  //配置路由规则
		{ path: '/', redirect: '/home' },
		{ path: '/home', component: HomeContainer },
		{ path: '/member', component: MemberContainer },
		{ path: '/search', component: SearchContainer },
		{ path: '/shopcar', component: ShopcarContainer }
	],
	linkActiveClass: 'mui-active'  //覆盖默认的路由高亮的类， 默认的类 叫做 router-link-active
})

export default router