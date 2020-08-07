<template>
	<div>
		<div class="hua">
			<span>花一分钟</span><br />
			<span>学一道美食</span>
		</div>
		<div>
			<van-button type="primary" to="sjaho">
				<div class="sjhao">
					<span>手机号登录</span>
				</div>
			</van-button>
		</div>
		<!--底部代码-->
		<div class="webu">
			<van-tabbar v-model="active">
				<router-link to="/jrtj" tag="van-tabbar-item">
					<van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
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
	// import axios from 'axios'
	// import qs from'qs'
	// export default {
	// 	data() {
	// 		return {
	// 			username: '',
	// 			password: '',
	// 		};
	// 	},
	// 	methods: {
	// 		onSubmit() {
	// 			let data = qs.stringify({
	// 				'username':this.username,
	// 				'password' : this.password
	// 			})
	// 			axios.post("https://www.fastmock.site/mock/389036a084ff95f38b2a75fa4e091205/test/login",data).then(res=>{console.log(res)})
	// 		},
	// 	},
	// };
	export default {
		name: "denglu",
		data() {
			return {
				show: false,
			};
		},

		methods: {
			showPopup() {
				this.show = true;
			},
		},
	};
</script>

<style>
	/* .van-cell__right-icon {
		margin-left: 0.06667rem;
		color: #969799;
		display: none;
	} */

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

	.van-tabbar-item__icon .van-icon {
		display: block;
		min-width: 1em;
		font-size: 60px;
	}

	.van-button--primary {
		color: black;
		border-radius: 50px;
		margin-top: 300px;
		margin-left: 100px;
		font-size: 40px;
		width: 500px;
		height: 100px;
		background-color: #F7F7F7;
		border: 0.01333rem solid #F7F7F7;
	}

	/* 	.sjhao {
		border-radius: 50px;
		margin-top: 90px;
		margin-left: 100px;
		color: white;
		line-height: 100px;
		text-align: center;
		font-size: 50px;
		background-color: #007FD1;
		height: 100px;
		width: 490px;
	}*/

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.block {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}

	.hua {
		margin-left: 40px;
		margin-top: 220px;
		font-size: 90px;
		font-weight: bold;
	}

	.van-cell__right-icon {
		margin-left: 0.06667rem;
		color: #969799;
		display: none;
	}
</style>
