<template>
	<div class="tobu">
		<div class="img4">
			<img src="../assets/img/4.png" />
			<div class="guanl">
				<span>XXXX智慧社区管理系统</span>
			</div>
		</div>
		<div class="xiala">
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<i class="el-icon-user-solid">{{this.$store.state.username}}</i>
					<i class="el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>修改密码</el-dropdown-item>
					<el-dropdown-item>个人资料</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<i class="el-icon-sunset huan">换肤</i>
					<i class="el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>修改密码</el-dropdown-item>
					<el-dropdown-item>个人资料</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<i class="el-icon-question bang">帮助</i>
					<i class="el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item> 帮助文档</el-dropdown-item>
					<el-dropdown-item>关于系统</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<i class="el-icon-switch-button" @click="tuchu()"></i>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			tuchu() {
				this.$confirm('是否退出系统, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '退出成功!',
					});
					localStorage.removeItem("userToken")
					localStorage.removeItem("user")
					this.$router.push({
						name: "index"
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消'
					});
				});
				// localStorage.setItem("user","")

			}
		}
	}
</script>

<style>
	.tobu {
		height: 100px;
		width:1500px;
		background-color: #957BFE;
	}

	.zshang {
		margin-left: 201px;
		margin-top: 30px;
		width: 1300px;
		height: 100px;
		border: 1px solid #2618E8;
	}

	.zongjian {
		margin-left: 245px;
	}
</style>
