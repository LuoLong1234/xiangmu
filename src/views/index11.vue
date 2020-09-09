<template>
	<div>
		<div class="wuye">
			<span>停车记录</span>
		</div>
		<div class="rqishij">
			<div class="shijians">
				<span>开始日期:</span>
				<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
			</div>
			<div class="shijiansx">
				<span>结束日期:</span>
				<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
			</div>
			<div class="shijiansx1">
				<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
			</div>
			<div class="chax">
				<span>查询</span>
			</div>
			<div class="chax1">
				<span>添加</span>
			</div>
			<div class="biaoge">
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="创建日期" width="160">
					</el-table-column>
					<el-table-column prop="name" label="车辆名称" width="140">
					</el-table-column>
					<el-table-column prop="zhuhu" label="车辆型号" width="160">
					</el-table-column>
					<el-table-column prop="jiaofjie" label="车辆车牌" width="160">
					</el-table-column>
					<el-table-column prop="jiaofr" label="车身照片" width="160">
						<template slot-scope="scope">
							<img :src="scope.row.jiaofr" min-width="70" height="70" />
						</template>
					</el-table-column>
					<el-table-column prop="jaiofzt" label="车辆备注" width="120">
					</el-table-column>
					<el-table-column prop="jffans" label="绑定车位" width="120">
					</el-table-column>
					<el-table-column prop="coazuo" label="操作" width="180">
						<template>
							<el-button type="text" size="small">修改</el-button>
							<el-button type="text" size="small">删除</el-button>
							<el-button type="text" size="small">详情</el-button>
						</template>
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
	</div>
</template>

<script>
	var _index; //定义全局变量
	export default {
		data() {
			return {
				tableData: [{
					date: '2019-09-01 10:12:11',
					name: '宝马1系',
					zhuhu: '116i',
					jiaofjie: '京A~F0236',
					jiaofr: require("@/assets/img/11.jpg"),
					jaiofzt: '-',
					jffans: 'A001'
				}, {
					date: '2019-09-01 10:12:11',
					name: '奔驰',
					zhuhu: 'F200',
					jiaofjie: '粤B~F1236',
					jiaofr: require("../assets/img/11.jpg"),
					jaiofzt: '-',
					jffans: 'A002'
				}, {
					date: '2019-09-01 10:12:11',
					name: '大众',
					zhuhu: 'xxx',
					jiaofjie: '湘A~0392',
					jiaofr: require("../assets/img/11.jpg"),
					jaiofzt: '-',
					jffans: 'A003'
				}, {
					date: '2019-09-01 10:12:11',
					name: '北京现代',
					zhuhu: 'xxx',
					jiaofjie: '湘F~0312',
					jiaofr: require("../assets/img/11.jpg"),
					jaiofzt: '-',
					jffans: 'A004'
				}],
				options: [{
						value: '选项1',
						label: '水费'
					}, {
						value: '选项2',
						label: '电费'
					}, {
						value: '选项3',
						label: '停车费'
					}, {
						value: '选项4',
						label: '燃气费'
					}, {
						value: '选项5',
						label: '固话宽带'
					},
					{
						value: '选项6',
						label: '固话宽带',
					},
					{
						value: '选项7',
						label: '有线电视',
					},
					{
						value: '选项8',
						label: '物业费',
					}
				],
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
			}
		}
	}
</script>

<style>
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
		margin-top: 89px;
		height: 60px;
		border: 1px solid #CFCFFF;
	}

	.biaoge {
		margin-top: 30px;
	}

	.xvanz {
		margin-top: -40px;
		margin-left: 760px;
	}

	.chax {
		margin-left: 1020px;
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

	.chax1 {
		margin-left: 1119px;
		margin-top: -36px;
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
		margin-left: 400px;
		margin-top: -40px;
	}

	.shijiansx>span {
		padding-right: 10px;
	}

	.shijiansx1 {
		margin-left: 737px;
		margin-top: -40px;
	}

	.shijiansx1>span {
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
		margin-top: 20px;
		margin-left: 239px;
		height: 630px;
		border: 1px solid #CFCFFF;
		width: 1216px;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1216px;
		margin-left: 238px;
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
<style scoped="">
	.biaoge>>>.cell {
		text-align: center;
	}
</style>
