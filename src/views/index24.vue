<template>
	<div>
		<div class="wuye">
			<span>权限管理</span>
		</div>
		<div class="rqishij">

			<div class="chebian">
				<div class="jslb">
					<span>角色列表</span>
				</div>
				<div class="jslb1">
					<span>系统管理员</span>
				</div>
				<div class="jslb2">
					<span>社区管理员</span>
				</div>
				<div class="jslb2">
					<span>运维人员</span>
				</div>
				<div class="jslb2">
					<span>物业人员</span>
				</div>
			</div>

			<div class="you">
				<el-table :data="tableData" border style="width: 100%" height="600">
					<el-table-column prop="date" label="日期" width="100" type="selection">
					</el-table-column>
					<el-table-column prop="name" label="功能菜单" width="180">
					</el-table-column>
					<el-table-column prop="address" label="二级菜单">
						<template>
							<el-checkbox v-model="checked">物业缴费</el-checkbox>
							<el-checkbox v-model="checked">物业缴费</el-checkbox>
						</template>
					</el-table-column>
					<el-table-column prop="address" label="三级菜单">

					</el-table-column>

					<el-table-column label="操作">
						<template>
							<el-checkbox v-model="checked">查询</el-checkbox>
							<el-checkbox v-model="checked">删除</el-checkbox>
						</template>
					</el-table-column>

				</el-table>

			</div>

		</div>
		<div class="genx">
			<el-button type="primary">更新权限</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				tableData: [{
					date: '1',
					name: '智慧物业',
					zhuhu: '系统管理员',
					address: '-'
				}, {
					date: '2',
					name: '社区医疗',
					zhuhu: '社区管理员',
					address: '-'
				}, {
					date: '3',
					name: '智能应用',
					zhuhu: '运维人员',
					address: '-'
				}, {
					date: '4',
					name: '基本信息',
					zhuhu: '数据统计',
					address: '-'
				}, {
					date: '5',
					name: '系统管理',
					zhuhu: '数据统计',
					address: '-'
				}],
				options: [{
					value: '选项1',
					label: '一手房'
				}, {
					value: '选项2',
					label: '二手房'
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
		}
	}
</script>

<style>
	.genx {
		margin-top: -43px;
		margin-left: 1300px;
	}

	.you {
		margin-top: -550px;
		margin-left: 256px;
	}

	.jslb {
		border-bottom: 2px solid white;
		background-color: #007FD1;
		color: white;
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	.jslb1 {
		background-color: #2222CC;
		color: white;
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	.jslb2 {
		border: 1px solid #007FD1;
		/* color: white; */
		width: 198px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	.chebian {
		margin-top: 30px;
		margin-left: 20px;
		border: 1px solid #CFCFFF;
		width: 200px;
		height: 548px;
	}

	.rqishij {
		margin-top: 20px;
		margin-left: 209px;
		height: 684px;
		border: 1px solid #CFCFFF;
		width: 1216px;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1215px;
		margin-left: 212px;
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
