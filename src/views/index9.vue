<template>
	<div>
		<div class="wuye">
			<span>医生简介</span>
		</div>
		<div class="zhengt">
			<div class="hadess">
				<div class="inpsts">
					<input type="text" value="请输入医院的名称" />
				</div>
				<div class="anns">
					Go
				</div>
				<div class="tubaio">
					<i class="el-icon-location"></i>
					<span>长沙</span>
					<a>切换城市</a>
				</div>
				<div class="xialakuagsh">
					<select>
						<option value="volvo">请选择科室</option>
						<option value="saab">1科</option>
						<option value="opel">2科</option>
						<option value="audi">3科</option>
					</select>
					<input type="text" placeholder="请输入医生名称" />
					<div class="sosuo">
						<span>搜索</span>
					</div>
				</div>
			</div>
			<div class="keishi">
				<div v-for="(item,index) in shuzue" :key="index">
					<div class="yisheng">
						<div class="kehsi">
							{{item.text}}
						</div>
						<img src="../assets/img/4.png" />
						<span>{{item.text2}}</span>
					</div>
				</div>
			</div>
			<div class="feny">
				<div class="daijiao">
					<span>总账单:100/条</span>
					<span>页数:1/9</span>
					<span>每页:12/条</span>
				</div>
				<div class="fenyrs">
					<el-pagination backgroun dlayout="prev, pager, next" :total="1000"></el-pagination>
				</div>
			</div>
			<!--左边-->
			<div class="xiakcaidan">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shuzue: [],
				data: [{
						label: '当前位置',
						children: [{
							label: '佑姆塘社区医院',
							labe2: '湘雅一医院',
							labe3: '长沙光大医院',
							labe4: '长沙爱耳眼科',
							labe5: '湖南省中医附属医院',
							labe6: '岳麓区人民医院'
						}]
					}, {
						label: '省级医院',
						children: [{
							label: '湖南省人民医院',
							labe2: '湖南省儿童医院',
							labe3: '湖南省妇幼保键院',
							labe4: '湖南省xxx医院',
						}]
					}, {
						label: '市级医院',
						children: [{
							label: '长沙市一医院',
							labe2: '长沙市二医院',
							labe3: '长沙市三医院',
							labe4: '长沙市四医院',
							labe5: '长沙市妇幼保键医',
							labe6: '长沙xxx医院'
						}]
					},
					{
						label: '专科医院',
						children: [{
							label: 'xxx牙科医院',
							labe2: 'xxx口腔医院',
							labe3: 'xxx皮肤病医院',
							labe4: 'xxx眼科医院'
						}]
					}, {
						label: '重点医院',
						children: [{
							label: '湘雅一医院',
							labe2: '湘雅二医院',
							labe3: '湘雅三医院',
							labe4: '湘雅四医院',
							labe5: '湘雅五医院'
						}]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		created() {
			this.$axios.get("https://www.fastmock.site/mock/124f584f336fc938b500c32e3b77c88b/index/test").then((res) => {
				console.log(res)
				this.shuzue = res.data.data.shuzue
			})
		}
	};
</script>

<style scoped="scoped">
	.daijiao {
		padding-top: 18px;
	}

	.daijiao>span:nth-of-type(1) {
		margin-left: 231px;
	}

	.daijiao>span:nth-of-type(2) {
		margin-left: 10px;
	}

	.daijiao>span:nth-of-type(3) {
		margin-left: 10px;
	}

	.fenyrs {
		margin-top: -25px;
		margin-left: 500px;
	}

	.feny {
		margin-top: 78px;
		height: 60px;
	}

	.keishi {
		display: flex;
		flex-wrap: wrap;
		margin-left: 156px;
	}

	.kehsi {
		line-height: 30px;
		padding-left: 20px;
		height: 30px;
		border-bottom: 1px solid black;
	}

	.yisheng {
		width: 60%;
		/* float: left; */
		height: 163px;
		margin-left: 41px;
		margin-top: 41px;
		width: 258px;
		border: 1px solid #000000;
		border-radius: 6px;
	}

	.yisheng>span {
		padding-left: 70px;
	}

	.yisheng>img {
		padding-top: 10px;
		padding-left: 10px;
	}

	.el-submenu .el-menu-item {
		height: 50px;
		line-height: 0px;
		padding: 0 45px;
		min-width: 200px;
	}

	.el-menu {
		padding-top: 20px;
	}

	.xiakcaidan {
		margin-left: 13px;
		height: 760px;
		width: 155px;
		margin-top: -756px;
		border-right: 1px solid #CFCFFF;
	}

	.sosuo {
		cursor: pointer;
		cursor: pointer;
		margin-top: -26px;
		margin-left: 320px;
		line-height: 30px;
		color: white;
		height: 28px;
		width: 61px;
		border-radius: 5px;
		background-color: #007FD1;
		text-align: center;
	}

	.xialakuagsh {
		margin-left: 672px;
		margin-top: -30px;
	}

	.xialakuagsh>select {
		margin-left: 10px;
	}

	.xialakuagsh>input {
		margin-left: 10px;
	}

	.tubaio {
		margin-top: -30px;
		margin-left: 220px;
		color: #007FD1;
		font-size: 30px;
	}

	.tubaio>span {
		margin-left: 10px;
		margin-right: 10px;
		color: black;
		font-size: 15px;
	}

	.tubaio>a {
		text-decoration: underline;
		font-size: 15px;
	}

	.anns {
		text-align: center;
		margin-top: -27px;
		margin-left: 150px;
		line-height: 30px;
		color: white;
		line-height: 30px;
		width: 42px;
		height: 27px;
		border-radius: 5px;
		background-color: #007FD1;
	}

	.inpsts {
		padding-left: 10px;
		padding-top: 7px;
	}

	.inpsts>input {
		font-size: 12px;
		height: 24px;
		width: 120px;
	}

	.hadess {
		height: 40px;
		border-bottom: 1px solid #CFCFFF;
	}

	.zhengt {
		margin-left: 255px;
		margin-top: 30px;
		border: 1px solid #CFCFFF;
		height: 800px;
		width: 1074px;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1076px;
		margin-left: 254px;
		margin-top: 20px;
		color: white;
		font-size: 15px;
		background-image: linear-gradient(90deg, #bfadff, #d8cffe, #d8cffe, #fbfaff);
		font-weight: bold;
	}

	.wuye>span {
		padding-left: 12px;
	}
</style>
