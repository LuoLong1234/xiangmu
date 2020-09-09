<template>
	<div class="zuobain">
		<div class="ssuos">
			<el-radio-group v-model="isCollapse">
				<el-button @click="isCollapse =! isCollapse" icon="el-icon-s-fold bu" style="background-color: #623BFE !important; border: 0px !important; "></el-button>
			</el-radio-group>
		</div>
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#623BFE" text-color="#fff">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location yan12"></i>
					<span slot="title">首页</span>
				</template>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-office-building yan12"></i>
					<span slot="title">智慧物业</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/inde3" tag="div">
						<el-menu-item index="1-1">物业缴费</el-menu-item>
					</router-link>
					<router-link to="/index2/index4" tag="div">
						<el-menu-item index="1-2">缴费咨询</el-menu-item>
					</router-link>
					<router-link to="/index2/index5" tag="div">
						<el-menu-item index="1-3">故障报修</el-menu-item>
					</router-link>
					<router-link to="/index2/index6" tag="div">
						<el-menu-item index="1-4">公告管理</el-menu-item>
					</router-link>

				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-sunrise yan12"></i>
					<span slot="title">社区医疗</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/index7" tag="div">
						<el-menu-item index="1-5">预约挂号</el-menu-item>
					</router-link>
					<router-link to="/index2/index8" tag="div">
						<el-menu-item index="1-6">健康小贴士</el-menu-item>
					</router-link>
					<router-link to="/index2/index9" tag="div">
						<el-menu-item index="1-7">医生简介</el-menu-item>
					</router-link>

				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-cpu yan12"></i>
					<span slot="title">智能应用</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/index14" tag="div">
						<el-menu-item index="1-8">智能停车</el-menu-item>
					</router-link>
					<router-link to="/index2/index15" tag="div">
						<el-menu-item index="1-9">智能开门</el-menu-item>
					</router-link>
					<router-link to="/index2/index10" tag="div">
						<el-menu-item index="1-10">车位录入</el-menu-item>
					</router-link>
					<router-link to="/index2/syuan" tag="div">
						<el-menu-item index="1-11">车辆管理</el-menu-item>
					</router-link>
					<router-link to="/index2/index12" tag="div">
						<el-menu-item index="1-12">停车记录</el-menu-item>
					</router-link>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-folder-opened yan12"></i>
					<span slot="title">数据统计</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/index16">
						<el-menu-item index="1-13">房屋分类统计</el-menu-item>
					</router-link>
					<router-link to="/index2/index17">
						<el-menu-item index="1-14">缴费分析统计</el-menu-item>
					</router-link>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="6">
				<template slot="title">
					<i class="el-icon-user-solid yan12"></i>
					<span slot="title">基本信息</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/index18">
						<el-menu-item index="1-15">房屋信息</el-menu-item>
					</router-link>
					<router-link to="/index2/index19">
						<el-menu-item index="1-16">人口信息</el-menu-item>
					</router-link>
					<router-link to="/index2/indx20">
						<el-menu-item index="1-17">设备信息</el-menu-item>
					</router-link>
					<router-link to="/index2/index21">
						<el-menu-item index="1-18">电子地图</el-menu-item>
					</router-link>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="7">
				<template slot="title">
					<i class="el-icon-info yan12"></i>
					<span slot="title">系统管理</span>
				</template>
				<el-menu-item-group>
					<router-link to="/index2/index22">
						<el-menu-item index="1-19">用户管理</el-menu-item>
					</router-link>
					<router-link to="/index2/index23">
						<el-menu-item index="1-20">角色管理</el-menu-item>
					</router-link>
					<router-link to="/index2/index24">
						<el-menu-item index="1-21">权限管理</el-menu-item>
					</router-link>
					<router-link to="/index2/zxgc">
						<el-menu-item index="1-22">数据增 删 改</el-menu-item>
					</router-link>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.yan12
	{
		color: white !important;
	}
	.ssuos {
		margin-left: 117px;
	}
	.zuobain {
		width: 189px;
		margin-top: 14px;
		position: absolute;
		background-color: #623BFE;
	}

	.el-button--primary {
		color: #FFF;
		background-color: #623BFE;
		border: 0;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 245px;
		min-height: 400px;
		border: 0;
	}
</style>
