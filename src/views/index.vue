<template>
	<div>
		<div class="img1">
			<div class="zhihui">
				<span>XXX智慧社区管理系统</span>
			</div>
			<div class="denglu">
				<div class="img2">
					<img src="../assets/img/2.jpg" width="40%" />
				</div>
				<div class="kuang">
					<div class="input">
						<div class="youhu">
							<el-input placeholder="请输入用户名" v-model="input" clearable>
							</el-input>
						</div>
						<div class="mima">
							<el-input placeholder="请输入密码" v-model="inputs" show-password></el-input>
						</div>
					</div>
					<div class="wnagji">
						<input type="checkbox" /> <span>记住密码</span>
					</div>
					<div class="butt">
						<el-button type="primary" round @click="dengl()">登录</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import qs from 'qs'
	export default {
		data() {
			return {
				input: '',
				inputs: ''
			}
		},
		methods: {
			dengl() {
				//alert(this.input+":"+this.inputs)
				let data = qs.stringify({
					"username": this.input,
					"password": this.inputs
				})
				this.$axios.post("http://www.chenmin.work:8081/examsystem/login", data)
					.then((res) => {
						console.log(res)
						if (res.data.errorCode !== "4001") {
							localStorage.setItem("userToken", res.data.data.token);
							localStorage.setItem("user", this.input);
							this.$store.commit("set_user", localStorage.getItem("user"));
							this.$router.push("/index2/index13");
						} else {
							alert(res.data.msg);
						}
					});
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.img1 {
		background-image: url(../assets/img/1.jpg);
		width: 100%;
		height: 754px;
	}

	.zhihui {
		padding-top: 248px;
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		color: white;
	}

	.denglu {
		margin-top: 7px;
		margin-left: 512px;
		width: 499px;
		height: 234px;
		border-radius: 5px;
		background-color: white;
	}

	.img2 {
		padding-left: 30px;
		padding-top: 20px;
	}

	.kuang {
		margin-top: -160px;
	}

	.wnagji {
		margin-top: 10px;
		margin-left: 392px;
	}

	.youhu {
		margin-bottom: 10px;
		width: 226px;
	}

	.input {
		margin-left: 259px;
	}

	.mima {
		width: 226px;
	}

	.butt {

		margin-top: 15px;
		margin-left: 260px;
	}

	.butt>button {
		width: 200px;
	}
</style>
