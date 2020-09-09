<template>
	<div>
		<div class="wuye">
			<span>智能停车</span>
		</div>
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
						<span>收入对比</span>
						<div class="annoe">
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
						</div>
					</div>
					<div class="index1">
						<ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
					</div>
				</div>
			</div>
			<!--设备分布-->
			<div class="fanwulei1">
				<div class="shebfenbu">
					<span>车辆监控</span>
				</div>
				<div class="img20">
					<img src="../assets/img/18.jpg" width="90%" />
				</div>
			</div>
			<!--设备状态-->
			<div class="fanwulei2">
				<div class="fushuz">
					<div class="fuangwy">
						<span>免费/异常抬杠</span>
						<div class="annoe">
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
						</div>
					</div>
					<div class="index1">
						<ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
					</div>
				</div>
			</div>
		</div>
		<div class="zongjian">
			<!--中间下面-->
			<div class="fanwulei">
				<div class="fushuz">
					<div class="fuangwy">
						<span>车辆出入情况</span>
						<div class="annoe">
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
						</div>
					</div>
					<div class="index1">
						<ve-ring :data="chartData"></ve-ring>
					</div>
				</div>
			</div>
			<!--设备分布-->
			<div class="fanwulei1">
				<div class="shebfenbu">
					<span>车辆停靠点</span>
				</div>
				<div class="img20">
					<img src="../assets/img/5.jpg" width="98%" />
				</div>
			</div>
			<!--设备状态-->
			<div class="fanwulei2">
				<div class="fushuz">
					<div class="fuangwy">
						<span>车牌号异常分析</span>
						<div class="annoe">
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
							<span><input type="radio" /></span>
							<span style="font-size: 14px;">按日</span>
						</div>
					</div>
					<div class="index1">
						<ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import chebian from '../components/chebian.vue'
	// import hader from '../components/hade.vue'
	export default {
		data() {
			this.chartSettings = {
				metrics: ['访问用户', '下单用户'],
				dimension: ['日期']
			}
			return {
				chartData: {
					columns: ['日期', '访问用户', '下单用户', '下单率'],
					rows: [{
							'日期': '昨天',
							'访问用户': 1393,
							'下单用户': 1093,
							'下单率': 0.32
						},
						{
							'日期': '今天',
							'访问用户': 3530,
							'下单用户': 3230,
							'下单率': 0.26
						}
					]
				}
			}
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

<style scoped="scoped">
	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1295px;
		margin-left: 198px;
		margin-top: 20px;
		color: white;
		font-size: 15px;
		background-image: linear-gradient(90deg, #bfadff, #d8cffe, #d8cffe, #fbfaff);
		font-weight: bold;
	}

	.wuye>span {
		padding-left: 12px;
	}

	.shebfenbu {
		margin-left: 10px;
		margin-top: 10px;
	}

	.img20 {
		margin-top: 11px;
	}

	.index1 {
		margin-top: 24px;
	}

	.annoe {
		margin-left: 120px;
		margin-top: -20px;
	}

	.annoe>span {
		margin-left: 5px;
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
		margin-top: 20px;
		width: 100%;
		height: 400px;
		border: 1px solid #007FD1;
	}

	.fanwulei2 {
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

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
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
		margin-left: 199px;
		margin-top: 30px;
		width: 1300px;
		height: 100px;
		border: 1px solid #2618E8;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 168px;
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
		background-color: red;
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
