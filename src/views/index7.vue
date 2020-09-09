<template>
	<div>
		<div class="wuye">
			<span>预约挂号</span>
		</div>
		<div class="yygua">
			<!--预约挂号-->
			<div class="yyguaho">
				<span>快速预约</span>
			</div>
			<div class="yyguahos">
				<span>快速预约</span>
			</div>
			<div class="yyghao">
				<img src="../assets/img/10.jpg" width="50%" />
			</div>
			<div class="wexts">
				<span style="color: red;">温馨提示:</span> 预约完成后，预约结果将已社区公众号推送给您。如果您未关注公众号，则以短信方式发送到您的手机
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style>
	.wexts {
		margin-left: 145px;
		margin-top: 87px;
		color: #008000;
	}

	.yyghao {
		margin-top: 40px;
		margin-left: 350px;

	}

	.yyguahos {
		text-align: center;
		margin-top: -185px;
		margin-left: 600px;
		line-height: 176px;
		font-size: 25px;
		color: white;
		width: 293px;
		height: 185px;
		background-color: #CCCCCC;
		border-radius: 10px;
	}

	.yyguaho {
		text-align: center;
		margin-top: 119px;
		margin-left: 144px;
		line-height: 176px;
		font-size: 25px;
		color: white;
		width: 293px;
		height: 185px;
		background-color: #33CC99;
		border-radius: 10px;
	}

	.yygua {
		margin-left: 252px;
		margin-top: 16px;
		width: 1078px;
		height: 800px;
		border: 1px solid #CFCFFF;

	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1082px;
		margin-left: 252px;
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
