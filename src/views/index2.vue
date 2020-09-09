<template>
	<div>
		<hader></hader>
		<!--中间部分-->
		
		<!--左边导航-->
		<chebian></chebian>
		<!--中间渲染-->
		<router-view>
		
		</router-view>
	</div>
</template>

<script>
	import chebian from '../components/chebian.vue'
	import hader from '../components/hade.vue'
	export default {
		data() {
			return {
				isCollapse: false,
				chartData: {
					columns: ['日期', '访问用户'],
					rows: [{
							'日期': '毛坯:18.47%',
							'访问用户': 1393
						},
						{
							'日期': '简装',
							'访问用户': 3530
						},
						{
							'日期': '精装:25.07%',
							'访问用户': 2923
						},
						{
							'日期': '38.26%',
							'访问用户': 1723
						}
					]
				},
				chartDatas: {
					columns: ['活动', '时间'],
					rows: [{
							'活动': '吃饭',
							'时间': 4
						},
						{
							'活动': '睡觉',
							'时间': 10
						},
						{
							'活动': '打豆豆',
							'时间': 5
						}
					]
				},
				chartData1: {
					columns: ['日期', '访问用户'],
					rows: [{
							'日期': '1/1',
							'访问用户': 1393
						},
						{
							'日期': '1/2',
							'访问用户': 3530
						},
						{
							'日期': '1/3',
							'访问用户': 2923
						},
						{
							'日期': '1/4',
							'访问用户': 1723
						},
						{
							'日期': '1/5',
							'访问用户': 3792
						},
						{
							'日期': '1/6',
							'访问用户': 4593
						}
					]
				}
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		components: {
			hader: hader,
			chebian: chebian
		},
	}
</script>

<style>
	.shebfenbu {
		margin-left: 10px;
		margin-top: 10px;
	}

	.img20 {
		margin-top: 11px;
	}

	.index1 {
		margin-top: 30px;
	}

	.fuangwy {
		padding-left: 5px;
		padding-top: 10px;
	}

	.fuangwy>span:nth-of-type(1) {
		font-size: 15px;
	}

	.fuangwy>span:nth-of-type(2) {
		padding-left: 125px;
	}

	.fushuz {
		height: 35px;
		border-bottom: 1px solid #007FD1;
	}

	.zongjian {
		margin-left: 242px;
	}

	.fanwulei {
		margin-left: -45px;
		float: left;
		margin-top: 20px;
		width: 289px;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.fanwulei1 {
		margin-left: 10px;
		float: left;
		margin-top: 20px;
		width: 700px;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.fanwulei2 {
		margin-left: 9px;
		float: left;
		margin-top: 20px;
		width: 289px;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.bu {
		font-size: 30px;
	}

	.denj {
		padding-left: 14px;
		padding-top: 22px;
		color: #FAAF00;
		font-size: 60px;
	}

	.red {
		padding-left: 14px;
		padding-top: 22px;
		color: red;
		font-size: 60px;
	}

	/* .el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	} */

	.liangbai {
		font-weight: bold;
		font-size: 40px;
		color: #2618E8;
	}

	.indexs {
		margin-left: 40px;
		float: left;
	}

	.fang {
		padding-left: 14px;
		padding-top: 22px;
		color: #007FD1;
		font-size: 60px;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.zshang {
		margin-left: 195px;
		margin-top: 30px;
		width: 1300px;
		height: 100px;
		border: 1px solid #2618E8;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 184px;
		min-height: 400px;
	}

	.el-submenu .el-menu-item {
		height: 50px;
		line-height: 50px;
		padding: 0 45px;
		min-width: 176px;
	}

	.el-icon-switch-button {
		font-weight: bold;
		font-size: 25px;
		/* margin-left: 20; */
		color: white;
		padding-left: 80px;
	}

	.bang {
		margin-left: 30px;
		font-size: 20px;
	}

	.huan {
		margin-left: 30px;
		font-size: 20px;
	}

	.el-dropdown-link {
		color: white;
		font-size: 25px;
	}

	.top {
		width: 100%;
		height: 100px;
		background-color: #957BFE;
	}

	.img4 {
		padding-top: 7px;
		padding-left: 10px;
	}

	.guanl {
		margin-top: -74px;
		margin-left: 259px;
		color: white;
		font-size: 40px;
		font-weight: bold;
	}

	.xiala {
		margin-top: -28px;
		cursor: pointer;
		margin-left: 900px;
	}

	.er {
		text-align: center;
		margin-top: -64px;
		margin-left: 80px;
	}

	.er>span:nth-of-type(2) {
		font-size: 15px;
		padding-left: 6px;
	}
</style>
