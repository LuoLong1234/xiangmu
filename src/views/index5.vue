<template>
	<div>
		<div class="wuye">
			<span>物业报修</span>
		</div>
		<div class="qihuan">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				<el-tab-pane label="公共报修(4|2)" name="first">
					<div class="rqishij">
						<div class="shijians">
							<span>开始日期:</span>
							<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
						</div>
						<div class="shijiansx">
							<span>结束日期:</span>
							<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
						</div>
						<div class="xvanz">
							<el-select v-model="value" placeholder="状态">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="renm">
							<el-input v-model="input" placeholder="请输入报修人姓名"></el-input>
						</div>
						<div class="chax">
							<span>查询</span>
						</div>
						<div class="biaoge">
							<el-table :data="tableData" border style="width: 100%">
								<el-table-column prop="date" label="序号" width="60">
								</el-table-column>
								<el-table-column prop="name" label="报修时间" width="170">
								</el-table-column>
								<el-table-column prop="zhuhu" label="报修位置" width="140">
								</el-table-column>
								<el-table-column prop="jiaofjie" label="报修内容" width="120">
								</el-table-column>
								<el-table-column prop="jiaofr" label="报修人" width="120">
								</el-table-column>
								<el-table-column prop="jaiofzt" label="受理状态" width="120">
								</el-table-column>
								<el-table-column prop="xfzt" label="修复状态" width="150">
								</el-table-column>
								<el-table-column prop="xfsj" label="修复时间" width="120">
								</el-table-column>
								<el-table-column prop="jjr" label="解决人" width="120">
								</el-table-column>
								<el-table-column prop="caozuo" label="操作" width="120">
								</el-table-column>
							</el-table>
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
					</div>
				</el-tab-pane>
				<el-tab-pane label="个人报修(4|2)" name="second">
					<div class="rqishij">
						<div class="shijians">
							<span>开始日期:</span>
							<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
						</div>
						<div class="shijiansx">
							<span>结束日期:</span>
							<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
						</div>
						<div class="xvanz">
							<el-select v-model="value" placeholder="状态">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="renm">
							<el-input v-model="input" placeholder="请输入报修人姓名"></el-input>
						</div>
						<div class="chax">
							<span>查询</span>
						</div>
						<div class="biaoge">
							<el-table :data="tableData" border style="width: 100%">
								<el-table-column prop="date" label="序号" width="60">
								</el-table-column>
								<el-table-column prop="name" label="报修时间" width="170">
								</el-table-column>
								<el-table-column prop="zhuhu1" label="报修位置" width="170">
								</el-table-column>
								<el-table-column prop="jiaofjie1" label="报修内容" width="120">
								</el-table-column>
								<el-table-column prop="jiaofr" label="报修人" width="120">
								</el-table-column>
								<el-table-column prop="jaiofzt" label="受理状态" width="120">
								</el-table-column>
								<el-table-column prop="xfzt" label="修复状态" width="120">
								</el-table-column>
								<el-table-column prop="xfsj" label="修复时间" width="120">
								</el-table-column>
								<el-table-column prop="jjr" label="解决人" width="120">
								</el-table-column>
								<el-table-column prop="caozuo" label="操作" width="120">
								</el-table-column>
							</el-table>
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
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				input: '',
				tableData: [{
					date: '1',
					name: '2019-09-12 16:12:20',
					zhuhu: ' A区 地下停车场...',
					jiaofjie: '电梯口门锁损坏',
					jiaofr: '张xx',
					jaiofzt: '等待受理',
					xfzt: '-',
					xfsj: '-',
					jjr: '李xx',
					caozuo: '查看详情',
					zhuhu1: 'A区 1栋 1202',
					jiaofjie1: '水管漏水'

				}, {
					date: '2',
					name: '2019-09-12 16:12:20',
					zhuhu: ' A区 地下停车场...',
					jiaofjie: '电梯口门锁损坏',
					jiaofr: '张xx',
					jaiofzt: '已受理',
					xfzt: '等待修复',
					xfsj: '-',
					jjr: '李xx',
					caozuo: '查看详情',
					zhuhu1: 'A区 1栋 1202',
					jiaofjie1: '水管漏水'
				}, {
					date: '3',
					name: '2019-09-12 16:12:20',
					zhuhu: ' A区 地下停车场...',
					jiaofjie: '电梯口门锁损坏',
					jiaofr: '张xx',
					jaiofzt: '已受理',
					xfzt: '正在修复',
					xfsj: '-',
					jjr: '李xx',
					caozuo: '查看详情',
					zhuhu1: 'A区 1栋 1202',
					jiaofjie1: '水管漏水'
				}, {
					date: '4',
					name: '2019-09-12 16:12:20',
					zhuhu: ' A区 地下停车场...',
					jiaofjie: '电梯口门锁损坏',
					jiaofr: '张xx',
					jaiofzt: '已受理',
					xfzt: '已修复',
					xfsj: '2019-09-11 16:12:20',
					jjr: '李xx',
					caozuo: '查看详情',
					zhuhu1: 'A区 1栋 1202',
					jiaofjie1: '水管漏水'
				}],
				options: [{
					value: '选项1',
					label: '已受理'
				}, {
					value: '选项2',
					label: '等待受理'
				}, {
					value: '选项3',
					label: '正在进行'
				}, {
					value: '选项4',
					label: '已修复'
				}, {
					value: '选项5',
					label: '等待修复'
				}],
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},

				value1: '',
				value2: '',
				value: ''
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style scoped="scoped">
	.renm {
		width: 200px;
		margin-left: 921px;
		margin-top: -40px;
	}

	.qihuan {
		margin-top: 30px;
		margin-left: 233px;
		width: 1246px;
	}

	.daijiao {
		padding-top: 18px;
	}

	.daijiao>span:nth-of-type(1) {
		margin-left: 20px;
	}

	.daijiao>span:nth-of-type(2) {
		margin-left: 10px;
	}

	.daijiao>span:nth-of-type(3) {
		margin-left: 10px;
	}

	.fenyrs {
		width: 200px;
		margin-top: -25px;
		margin-left: 500px;
	}

	.feny {
		margin-top: 222px;
		height: 60px;
		border: 1px solid #CFCFFF;
	}

	.biaoge {
		margin-top: 30px;
	}

	.xvanz {
		margin-top: -40px;
		margin-left: 678px;
	}

	.chax {
		margin-left: 1150px;
		margin-top: -37px;
		cursor: pointer;
		line-height: 35px;
		height: 35px;
		text-align: center;
		border-radius: 5px;
		width: 85px;
		color: white;
		font-size: 13px;
		background-color: #BDBDFF;
	}

	.shijiansx {
		margin-left: 356px;
		margin-top: -40px;
	}

	.shijiansx>span {
		padding-right: 10px;
	}

	.shijians {
		margin-left: 30px;
		margin-top: 20px;
	}

	.shijians>span {
		padding-right: 10px;
	}

	.rqishij {
		/* margin-top: 20px;
		margin-left: 300px; */
		height: 630px;
		border: 1px solid #CFCFFF;
		width: 1244px;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1116px;
		margin-left: 235px;
		margin-top: 20px;
		color: white;
		font-size: 15px;
		background-image: linear-gradient(90deg, #bfadff, #d8cffe, #d8cffe, #fbfaff);
		font-weight: bold;
	}

	.wuye>span {
		padding-left: 12px;
	}
	.biaoge>>>.cell {
		text-align: center;
	}
</style>
