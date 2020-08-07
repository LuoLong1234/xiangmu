<template>
	<div>
		<!--搜索框-->
		<div class="sos">
			<van-search v-model="value" shape="round" background="#ffffff" placeholder="搜索收藏" />
		</div>
		<!--tab切换-->
		<div>
			<van-tabs>
				<van-tab v-for="(item,index) in name" :title="item" :key='index'>
					<div v-show="index==0">
						<div class="zanwu">
							<span>暂无收藏</span>
						</div>
					</div>
					<div v-show="index==1">
						<div>
							<span>还没有收藏夹</span>
						</div>
					</div>
					<div v-show="index==2">
						<div>
							<span>还没有收藏夹</span>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<!--底部代码-->
		<div class="webu">
			<van-tabbar v-model="active">
				<router-link to="/jrtj" tag="van-tabbar-item">
					<van-tabbar-item class="ys" icon="wap-home-o">首页</van-tabbar-item>
				</router-link>
				<router-link to="/jihua" tag="van-tabbar-item">
					<van-tabbar-item icon="search">计划</van-tabbar-item>
				</router-link>
				<router-link to="/socang" tag="van-tabbar-item">
					<van-tabbar-item icon="like-o">收藏</van-tabbar-item>
				</router-link>
				<router-link to="/denglu" tag="van-tabbar-item">
					<van-tabbar-item icon="smile-o">我的</van-tabbar-item>
				</router-link>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: ["全部收藏", "收藏夹", "最近观看"],
			}
		}
	}
</script>

<style>
	.van-tabbar {
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: content-box;
		width: 100%;
		height: 1.66667rem;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #fff;
	}
	.my-swipe .van-swipe-item {
		color: black;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: white;
	}
	.van-tabbar-item__icon .van-icon {
		display: block;
		min-width: 1em;
		font-size: 60px;
	}
	.zanwu
	{
		margin-top: 500px;
		font-size: 50px;
		text-align: center;
		color: #AAAAAA;
	}
</style>
