<template>
	<view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		  <swiper-item v-for="(item, i) in swiperList" :key="i">
		      <image :src="item.image_src"></image>
		
		  </swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 这是轮播图的数据列表
				swiperList: [],
			};
		},
		onLoad() {
		  // 调用方法，获取轮播图的数据
		  this.getSwiperList()
		},
		methods: {
		  async getSwiperList() {
		    // 发起请求
		    const { data: res } = await uni.$http.get('/api/home/swiperdata')
		    // 判断是否获取失败
		    if (res.meta.status !== 200) return uni.$showMsg()
		    // 转存数据
		    this.swiperList = res.message
		  }
		}
	}
</script>

<style lang="scss">
	swiper {
	  height: 330rpx;
	
	  .swiper-item,
	  image {
	    width: 100%;
	    height: 100%;
	  }
	}
</style>
