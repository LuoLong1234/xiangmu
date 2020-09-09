<template>
	<div>
		<div class="wuye">
			<span>设备信息</span>
		</div>
		<div class="rqishij">
			<div class="shijians">
				<el-select v-model="value" placeholder="设备类型">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="fnagwubianhao">
				<input type="text" placeholder="请输入角色名称" />
			</div>
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
					<el-table-column prop="name" label="设备编号" width="140">
					</el-table-column>
					<el-table-column prop="zhuhu" label="设备名称" width="140">
					</el-table-column>
					<el-table-column prop="jiaofjie" label="序列号" width="140">
					</el-table-column>
					<el-table-column prop="jiaofr" label="IP地址" width="180">
					</el-table-column>
					<el-table-column prop="jaiofzt" label="状态" width="180">
					</el-table-column>
					<el-table-column prop="jffans" label="类型" width="180">
					</el-table-column>
					<el-table-column prop="coazuo1" label="操作" width="140">
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
					name: '1001',
					zhuhu: '设备1',
					jiaofjie: '2019111123849',
					jiaofr: '192.168.1.1',
					jaiofzt: '忙碌',
					jffans: '灯光设备',
					coazuo1: '修改 删除'
				}, {
					date: '2',
					name: '1002',
					zhuhu: '设备2',
					jiaofjie: '2019111123849',
					jiaofr: '192.168.1.1',
					jaiofzt: '在线',
					jffans: '消防设备',
					coazuo1: '修改 删除'
				}, {
					date: '3',
					name: '1003',
					zhuhu: '设备3',
					jiaofjie: '2019111123849',
					jiaofr: '192.168.1.1',
					jaiofzt: '在线',
					jffans: '安防设备',
					coazuo1: '修改 删除'
				}, {
					date: '4',
					name: '1004',
					zhuhu: '设备4',
					jiaofjie: '2019111123849',
					jiaofr: '192.168.1.1',
					jaiofzt: '离线',
					jffans: '监控设备',
					coazuo1: '修改 删除'
				}],
				options: [{
					value: '灯光设备',
					label: '灯光设备'
				}, {
					value: '门禁设备',
					label: '门禁设备'
				}, {
					value: '门禁设备',
					label: '门禁设备'
				}, {
					value: '门禁设备',
					label: '门禁设备'
				}, {
					value: '门禁设备',
					label: '门禁设备'
				}],
				value1: '',
				value2: '',
				value: ''
			};
		}
	}
</script>

<style scoped="scoped">
	.fnagwubianhao {
		margin-left: 796px;
		margin-top: -38px;
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
		margin-top: 250px;
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
		margin-left: 555px;
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
		width: 1200px;
		margin-left: 217px;
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
