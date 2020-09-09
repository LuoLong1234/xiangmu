<template>
	<div>
		<div class="wuye">
			<span>健康小贴士</span>
		</div>
		<div class="qihuan">
			<div class="rqishij">
				<div class="shijians">
					<span>开始日期:</span>
					<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
				</div>
				<div class="shijiansx">
					<span>结束日期:</span>
					<el-date-picker v-model="value1" type="date" placeholder="年/月/日"></el-date-picker>
				</div>
				<div class="chax">
					<span>查询</span>
				</div>
				<div class="chaxs">
					<span>发布小贴士</span>
				</div>
				<div class="biaoge">
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column prop="date" label="发布日期" width="230">
						</el-table-column>
						<el-table-column prop="name" label="健康标题" width="230">
						</el-table-column>
						<el-table-column prop="zhuhu" label="健康内容" width="230">
						</el-table-column>
						<el-table-column prop="jiaofjie" label="备注" width="230">
						</el-table-column>
						<el-table-column prop="jiaofr" label="操作" width="320">
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				input: '',
				tableData: [{
					date: '2019-09-01 10:12:11',
					name: '标题1',
					zhuhu: ' 内容1',
					jiaofjie: 'xxx',
					jiaofr: '修改 删除'
				}, {
					date: '2019-09-01 10:12:11',
					name: '标题2',
					zhuhu: ' 内容2',
					jiaofjie: 'xxx',
					jiaofr: '修改 删除'
				}, {
					date: '2019-09-01 10:12:11',
					name: '标题3',
					zhuhu: ' 内容3',
					jiaofjie: 'xxx',
					jiaofr: '修改 删除'
				}, {
					date: '2019-09-01 10:12:11',
					name: '标题4',
					zhuhu: ' 内容4',
					jiaofjie: 'xxx',
					jiaofr: '修改 删除'
				}],
				options: [{
					value: '选项1',
					label: '业委会公告'
				}, {
					value: '选项2',
					label: '物业公告'
				}, {
					value: '选项3',
					label: '街道办公告'
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

<style>
	.chaxs {
		margin-left: 1123px;
		margin-top: -35px;
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
		margin-top: 242px;
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
		margin-left: 1007px;
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
		width: 1249px;
		margin-left: 230px;
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
