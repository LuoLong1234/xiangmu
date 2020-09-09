<template>
	<div>
		<div class="zshang">
			<div>
				<div class="indexs">
					<i class="el-icon-office-building fang"></i>
					<div class="er">
						<span class="liangbai">200</span><br />
						<span>楼宇数</span>
					</div>
				</div>
				<div class="indexs">
					<i class="el-icon-user denj"></i>
					<div class="er">
						<span class="liangbai">200</span><br />
						<span>登记人口数</span>
					</div>
				</div>
				<div class="indexs">
					<i class="el-icon-monitor fang"></i>
					<div class="er">
						<span class="liangbai">200</span><br />
						<span>智能设备数</span>
					</div>
				</div>
				<div class="indexs">
					<i class="el-icon-pie-chart fang"></i>
					<div class="er">
						<span class="liangbai">200</span><br />
						<span>智能家居数</span>
					</div>
				</div>
				<div class="indexs">
					<i class="el-icon-printer fang"></i>
					<div class="er">
						<span class="liangbai">200</span><br />
						<span>预约挂号数</span>
					</div>
				</div>
				<div class="indexs">
					<i class="el-icon-sunrise-1 red"></i>
					<div class="er">
						<span class="liangbai">100</span><br />
						<span>系统报警数</span>
					</div>
				</div>
			</div>
		</div>
		<div class="zongjian">
			<!--中间下面-->
			<div class="fanwulei">
				<div class="fushuz">
					<div class="fuangwy">
						<span>房屋类别统计</span>
						<span>单位:个</span>
					</div>
					<div class="index1">
						<ve-pie :data="chartData"></ve-pie>
					</div>
				</div>
			</div>
			<!--设备分布-->
			<div class="fanwulei1">
				<div class="shebfenbu">
					<span>设备分布图</span>
				</div>
				<div class="img20">
					<img src="../assets/img/5.jpg" width="100%" />
				</div>
			</div>
			<!--设备状态-->
			<div class="fanwulei2">
				<div class="fushuz">
					<div class="fuangwy">
						<span>设备状态</span>
						<span>单位:个</span>
					</div>
					<div class="index1">
						<ve-ring :data="chartData"></ve-ring>
					</div>
				</div>
			</div>
		</div>
		<div class="zongjian">
			<!--中间下面-->
			<div class="fanwulei">
				<div class="fushuz">
					<div class="fuangwy">
						<span>房屋类别统计</span>
						<span>单位:个</span>
					</div>
					<div class="index1">
						<ve-pie :data="chartData"></ve-pie>
					</div>
				</div>
			</div>
			<!--设备分布-->
			<div class="fanwulei1">
				<div class="shebfenbu">
					<span>缴费统计</span>
				</div>
				<div class="img20">
					<ve-waterfall :data="chartDatas"></ve-waterfall>
				</div>
			</div>
			<!--设备状态-->
			<div class="fanwulei2">
				<div class="fushuz">
					<div class="fuangwy">
						<span>设备状态</span>
						<span>单位:个</span>
					</div>
					<div class="index1">
						<ve-ring :data="chartData"></ve-ring>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
			// hader: hader,
			// chebian: chebian
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
		width: 100%;
		margin-top: 30px;
	}

	.fuangwy {
		padding-right: 10px;
		padding-left: 5px;
		padding-top: 10px;
	}

	.fuangwy>span:nth-of-type(1) {
		font-size: 15px;
	}

	.fuangwy>span:nth-of-type(2) {
		padding-left: 40%;
	}

	.fushuz {
		height: 35px;
		border-bottom: 1px solid #007FD1;
	}

	.zongjian {
		display: flex;
		margin-left: 244px;
	}

	.fanwulei {
		margin-left: -45px;
		margin-top: 20px;
		width: 100%;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.fanwulei1 {
		margin-left: 10px;
		/* float: left; */
		margin-top: 20px;
		width: 100%;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.fanwulei2 {
		margin-right: 10px;
		margin-left: 9px;
		margin-top: 20px;
		width: 100%;
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
		margin-left: 200px;
		margin-top: 30px;
		width: 1300px;
		height: 100px;
		border: 1px solid #2618E8;
	}

	.el-icon-switch-button {
		font-weight: bold;
		font-size: 25px;
		margin-left: 20;
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
