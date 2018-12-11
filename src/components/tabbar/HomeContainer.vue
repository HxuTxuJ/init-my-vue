<template>
  <div>
  	<!-- 轮播图 -->
	<mt-swipe :auto="3000">
		<mt-swipe-item><img src="../../images/abc.jpg" alt=""></mt-swipe-item>
		<mt-swipe-item><img src="../../images/fj.jpg" alt=""></mt-swipe-item>
		<mt-swipe-item><img src="../../images/timg.jpg" alt=""></mt-swipe-item>
	</mt-swipe>

	<!-- 九宫格 -->
	<ul class="mui-table-view mui-grid-view mui-grid-6">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		   		<img src="../../images/menu1.png" alt="">
		    	<div class="mui-media-body">新闻资讯</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		    	<img src="../../images/menu2.png" alt="">
		    	<div class="mui-media-body">图片分享</div>
		    </a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		   		<img src="../../images/menu3.png" alt="">
		    	<div class="mui-media-body">商品购买</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		    	<img src="../../images/menu4.png" alt="">
		    	<div class="mui-media-body">留言反馈</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		    	<img src="../../images/menu5.png" alt="">
		    	<div class="mui-media-body">视频专区</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
		    	<img src="../../images/menu6.png" alt="">
		    	<div class="mui-media-body">联系我们</div>
			</a>
		</li>
	</ul> 
  </div>
	
</template>

<script>
	export default {
		data() {
			return {}
		},
		created() {
			this.getLunbotu()
		},
		methods: {
			getLunbotu() {    //获取轮播图数据的方法
				this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
					console.log(result.body)
				})
			} 
		}
	}
</script>

<style scoped lang="scss">
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item {	
		&:nth-child(1) {
		    background-color: yellow;
		}
		&:nth-child(2) {
		    background-color: red;
		}
		&:nth-child(3) {
		    background-color: blue;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}	
	.mui-grid-view.mui-grid-6 {
		background-color:#fff;
		border:none;
		img {
			width: 60px;
			height: 60px;
		}
		.mui-media-body {
			font-size: 13px;
		}
	}
	.mui-table-view::after {
		background-color:#fff;
	}
	.mui-grid-view.mui-grid-6 .mui-table-view-cell {
	 	border:none;
	 }
</style>