<template>
	<div>
		<div class="wuye">
			<span>缴费查询</span>
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
			<div class="xvanz">
				<el-select v-model="value" placeholder="缴费类型">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="chax">
				<span>查询</span>
			</div>
			<div class="biaoge">
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="日期" width="160">
					</el-table-column>
					<el-table-column prop="name" label="缴费类型" width="160">
					</el-table-column>
					<el-table-column prop="zhuhu" label="住户楼室" width="160">
					</el-table-column>
					<el-table-column prop="jiaofjie" label="缴费金额" width="160">
					</el-table-column>
					<el-table-column prop="jiaofr" label="缴费人" width="160">
					</el-table-column>
					<el-table-column prop="jaiofzt" label="缴费状态" width="180">
					</el-table-column>
					<el-table-column prop="jffans" label="缴费方式" width="192">
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
	export default {
		data() {
			return {
				tableData: [{
					date: '2019-09-01 10:12:11',
					name: '水费',
					zhuhu: '6栋1202',
					jiaofjie: '50',
					jiaofr: '张xx',
					jaiofzt: '缴费成功',
					jffans: '微信支付'
				}, {
					date: '2019-09-01 10:12:11',
					name: '水费',
					zhuhu: '6栋1202',
					jiaofjie: '50',
					jiaofr: '张xx',
					jaiofzt: '缴费成功',
					jffans: '微信支付'
				}, {
					date: '2019-09-01 10:12:11',
					name: '水费',
					zhuhu: '6栋1202',
					jiaofjie: '50',
					jiaofr: '张xx',
					jaiofzt: '缴费成功',
					jffans: '微信支付'
				}, {
					date: '2019-09-01 10:12:11',
					name: '水费',
					zhuhu: '6栋1202',
					jiaofjie: '50',
					jiaofr: '张xx',
					jaiofzt: '缴费成功',
					jffans: '微信支付'
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
			};
		}
	}
</script>

<style scoped="scoped">
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
		margin-top: 244px;
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

	.shijiansx {
		margin-left: 400px;
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
		margin-top: 20px;
		margin-left: 237px;
		height: 630px;
		border: 1px solid #CFCFFF;
		width: 1174px;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1175px;
		margin-left: 236px;
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
