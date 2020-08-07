<template>

	<div>
		<div class="jihua">
			<span>计划餐单</span>
		</div>

		<div class="img1">
			<van-cell is-link @click="showPopup()"><img src="../../public/img/8.png" width="98%" /></van-cell>
			<div class="dingzi">
				<span>定制你的饮食计划</span><br />
				<span>4700人参加过</span>
			</div>
			<van-popup v-model="show" closeable close-icon-position='top-left' position="bottom" :style="{height:'96%'}">
				<img src="../../public/img/8.png" width="98%" />
				<div class="dinzhiyin">
					<span>定制你的饮食计划</span>
				</div>
				<div class="baohan">
					<span>计划包含</span><br />
					<span>根据你的喜好定制每日套餐食谱搭配</span>
				</div>
				<div class="jihuatd">
					<span>计划特点</span>
				</div>
				<div class="liangs">
					量身定制你的专属饮食计划，你可以选择每天希望吃几餐，根据你的喜好去过滤食谱、如：纯素食、蛋奶素食、不吃猪肉、哪些食物过敏、是否吃辣等。你还可以选择营养摄入的需求：如：少油、控糖、少盐、低热量。
				</div>
				<div class="likkash">
					<span>立刻开始你的计划吧!</span>
				</div>
				<div>
					<van-button round type="info">开通会员</van-button>
				</div>
			</van-popup>
		</div>
		<div class="img1">
			<van-cell is-link @click="showPopup()"><img src="../../public/img/8.png" width="98%" /></van-cell>
			<div class="dingzi">
				<span>定制你的饮食计划</span><br />
				<span>4700人参加过</span>
			</div>
			<van-popup v-model="show" closeable close-icon-position='top-left' position="bottom" :style="{height:'96%'}">
				<img src="../../public/img/8.png" width="98%" />
				<div class="dinzhiyin">
					<span>定制你的饮食计划</span>
				</div>
				<div class="baohan">
					<span>计划包含</span><br />
					<span>根据你的喜好定制每日套餐食谱搭配</span>
				</div>
				<div class="jihuatd">
					<span>计划特点</span>
				</div>
				<div class="liangs">
					量身定制你的专属饮食计划，你可以选择每天希望吃几餐，根据你的喜好去过滤食谱、如：纯素食、蛋奶素食、不吃猪肉、哪些食物过敏、是否吃辣等。你还可以选择营养摄入的需求：如：少油、控糖、少盐、低热量。
				</div>
				<div class="likkash">
					<span>立刻开始你的计划吧!</span>
				</div>
				<div>
					<van-button round type="info">开通会员</van-button>
				</div>
			</van-popup>
		</div>
		<div class="img1">
			<van-cell is-link @click="showPopup()"><img src="../../public/img/8.png" width="98%" /></van-cell>
			<div class="dingzi">
				<span>定制你的饮食计划</span><br />
				<span>4700人参加过</span>
			</div>
			<van-popup v-model="show" closeable close-icon-position='top-left' position="bottom" :style="{height:'96%'}">
				<img src="../../public/img/8.png" width="98%" />
				<div class="dinzhiyin">
					<span>定制你的饮食计划</span>
				</div>
				<div class="baohan">
					<span>计划包含</span><br />
					<span>根据你的喜好定制每日套餐食谱搭配</span>
				</div>
				<div class="jihuatd">
					<span>计划特点</span>
				</div>
				<div class="liangs">
					量身定制你的专属饮食计划，你可以选择每天希望吃几餐，根据你的喜好去过滤食谱、如：纯素食、蛋奶素食、不吃猪肉、哪些食物过敏、是否吃辣等。你还可以选择营养摄入的需求：如：少油、控糖、少盐、低热量。
				</div>
				<div class="likkash">
					<span>立刻开始你的计划吧!</span>
				</div>
				<div>
					<van-button round type="info">开通会员</van-button>
				</div>
			</van-popup>
		</div>
		<div class="img1">
			<van-cell is-link @click="showPopup()"><img src="../../public/img/8.png" width="98%" /></van-cell>
			<div class="dingzi">
				<span>定制你的饮食计划</span><br />
				<span>4700人参加过</span>
			</div>
			<van-popup v-model="show" closeable close-icon-position='top-left' position="bottom" :style="{height:'96%'}">
				<img src="../../public/img/8.png" width="98%" />
				<div class="dinzhiyin">
					<span>定制你的饮食计划</span>
				</div>
				<div class="baohan">
					<span>计划包含</span><br />
					<span>根据你的喜好定制每日套餐食谱搭配</span>
				</div>
				<div class="jihuatd">
					<span>计划特点</span>
				</div>
				<div class="liangs">
					量身定制你的专属饮食计划，你可以选择每天希望吃几餐，根据你的喜好去过滤食谱、如：纯素食、蛋奶素食、不吃猪肉、哪些食物过敏、是否吃辣等。你还可以选择营养摄入的需求：如：少油、控糖、少盐、低热量。
				</div>
				<div class="likkash">
					<span>立刻开始你的计划吧!</span>
				</div>
				<div>
					<van-button round type="info">开通会员</van-button>
				</div>
			</van-popup>
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
	import Vue from 'vue';
	import {
		Popup
	} from 'vant';

	Vue.use(Popup);
	export default {
		name: "jihua",
		data() {
			return {
				show: false,
				active: 0,
				current: 0,
			}
		},
		methods: {
			showPopup() {
				this.show = true;
			}
		}
	}
</script>

<style>
	.van-tabbar-item__icon .van-icon {
		display: block;
		min-width: 1em;
		font-size: 60px;
	}

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

	.van-button--normal {
		padding: 30px 200px;
		font-size: 30px;
	}

	.likkash {
		width: 300px;
		margin-left: 90px;
		margin-top: 20px;
		font-size: 30px;
		margin-right: 400px;
	}

	.liangs {
		text-align: left;
		margin-top: 30px;
		margin-left: 100px;
		font-size: 30px;
		width: 520px;
	}

	.jihuatd {
		font-size: 40px;
		font-weight: bold;
		margin-top: 30px;
		margin-right: 400px;
	}

	.baohan {
		border-radius: 10px;
		margin-top: 30px;
		margin-left: 140px;
		text-align: center;
		width: 60%;
		line-height: 30px;
		background-color: #ececec;
	}

	.baohan>span:nth-of-type(1) {
		display: inline-block;
		margin-top: 30px;
		font-size: 35px;
	}

	.baohan>span:nth-of-type(2) {
		font-size: 20px;
		display: inline-block;
		margin-bottom: 20px;
	}

	.dinzhiyin {
		font-weight: bold;
		font-size: 60px;
		text-align: center;
	}

	.jihua {
		font-weight: bold;
		margin-top: 20px;
		margin-left: 20px;
		font-size: 50px;
	}

	.van-cell__right-icon {
		margin-left: 0.06667rem;
		color: #969799;
		display: none;
	}

	.dingzi {
		line-height: 40px;
		text-align: left;
		margin-left: 30px
	}

	.dingzi>span:nth-of-type(1) {
		font-weight: bold;
		font-size: 40px;
	}

	.dingzi>span:nth-of-type(2) {
		/* font-weight: bold; */
		font-size: 30px;
	}

	.img1 {
		text-align: center;
	}
</style>
