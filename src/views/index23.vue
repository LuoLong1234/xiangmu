<template>
	<div>
		<div class="wuye">
			<span>人口信息</span>
		</div>
		<div class="rqishij">
			<div class="fnagwubianhao">
				<input type="text" placeholder="请输入角色名称" />
			</div>
			<!-- <div class="xvanz">
				<el-select v-model="value" placeholder="缴费类型">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div> -->
			<div class="chax">
				<span>查询</span>
			</div>
			<div class="chax1">
				<span>添加</span>
			</div>
			<div class="biaoge">
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="序号" width="100">
					</el-table-column>
					<el-table-column prop="name" label="角色名称" width="300">
					</el-table-column>
					<el-table-column prop="zhuhu" label="角色备注" width="300">
					</el-table-column>
					<el-table-column prop="coazuo1" label="操作" width="300">
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
					date: '1',
					name: '系统管理员',
					zhuhu: '系统管理员',
					coazuo1: '修改 删除'
				}, {
					date: '2',
					name: '社区管理员',
					zhuhu: '社区管理员',
					coazuo1: '修改 删除'
				}, {
					date: '3',
					name: '运维人员',
					zhuhu: '运维人员',
					coazuo1: '修改 删除'
				}, {
					date: '4',
					name: '物业人员',
					zhuhu: '物业人员',
					coazuo1: '修改 删除'
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
	.fnagwubianhao {
		margin-left: 796px;
		margin-top: 14px;
	}

	.fnagwubianhao>input {
		padding-left: 10px;
		width: 160px;
		height: 30px;
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
		margin-top: 258px;
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
		margin-left: 219px;
		margin-top: -40px;
	}

	.shijiansx1 {
		margin-left: 410px;
		margin-top: -40px;
	}

	.shijiansx2 {
		margin-left: 608px;
		margin-top: -40px;
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
		margin-left: 209px;
		height: 630px;
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

	.el-input {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 72%;
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
