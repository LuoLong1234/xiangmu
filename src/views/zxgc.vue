<template>
	<div class="home">
		<div class="biaoge">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="courseDesc" label="courseDesc" sortable>
				</el-table-column>
				<el-table-column prop="courseName" label="courseName" sortable>
				</el-table-column>
				<el-table-column prop="id" label="id" sortable>
				</el-table-column>
				<el-table-column prop="professional.professionalName" label="id" sortable>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="100">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="handleClick(scope.$index, tableData)">编辑</el-button>
						<el-button type="text" size="small" @click="remove(scope.$index, tableData)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class='add'>
			<router-link to="/index2/zj">
				<button type="button" class="button">添加</button>
			</router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				tableData: [

				],

			}
		},
		mounted() {
			this.getAll()
		},
		methods: {
			remove(index, rows) {
				this.$axios.get('http://www.chenmin.work:8081/examsystem/deleteCourse?id=' + rows[index].id)
					.then((res) => {
						if (res.data.success) {
							alert('删除成功！')
							rows.splice(index, 1);
						}
					})
			},
			getAll() {
				axios.get("http://www.chenmin.work:8081/examsystem/getAllCourse")
					.then(res => {
						this.tableData = res.data.data
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleClick(index, rows) {
				this.$router.push({
					name: 'zj',
					params: {
						duix: rows[index]
					}
				})
			}
		}
	};
</script>
<style lang='scss' scoped>
	.add {
		margin: 70px auto;
	}
	.biaoge
	{
		margin-top: 20px;
		margin-left: 260px;
		width: 1200px;
	}
	.button{
		margin-left: 1400px;
	}
</style>
