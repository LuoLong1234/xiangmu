<template>
	<div>
		<div class="wuye">
			<span>缴费分析统计</span>
		</div>
		<div class="zhengt">
			<div class="flxes">
				<div class="biankuang">
					<div class="img2">
						<img src="../assets/img/20.jpg" />
					</div>
					<div class="wenz">
						<span>1000</span>
						<span>毛坯数</span>
					</div>
				</div>
				<div class="biankuang">
					<div class="img2">
						<img src="../assets/img/20.jpg" />
					</div>
					<div class="wenz">
						<span>1000</span>
						<span>毛坯数</span>
					</div>
				</div>
				<div class="biankuang">
					<div class="img2">
						<img src="../assets/img/20.jpg" />
					</div>
					<div class="wenz">
						<span>1000</span>
						<span>毛坯数</span>
					</div>
				</div>
				<div class="biankuang">
					<div class="img2">
						<img src="../assets/img/20.jpg" />
					</div>
					<div class="wenz">
						<span>1000</span>
						<span>毛坯数</span>
					</div>
				</div>
			</div>

			<div class="zongxia">
				<div class="zongxiashang">
					<span>收费分析</span>
					<span>银行转账(%):</span>
					<span>50</span>
					<span>手机收款(%):</span>
					<span>20</span>
					<span>现价交易(%):</span>
					<span>30</span>
				</div>
				<div class="xiala">
					<select>
						<option>所有年份</option>
						<option>2019年</option>
						<option>2018年</option>
						<option>2017年</option>
						<option>2016年</option>
						<option>2015年</option>
						<option>2014年</option>
						<option>2013年</option>
						<option>2012年</option>
						<option>2011年</option>
						<option>2010年</option>
						<option>2009年</option>
						<option>2008年</option>
					</select>
				</div>
				<div class="zhuztu">
					<ve-line :data="chartData" :settings="chartSettings"></ve-line>
				</div>
			</div>

			<div class="zongxia">
				<div class="zongxiashang">
					<span>欠费分析</span>
				</div>
				<div class="xiala">
					<select>
						<option>所有年份</option>
						<option>2019年</option>
						<option>2018年</option>
						<option>2017年</option>
						<option>2016年</option>
						<option>2015年</option>
						<option>2014年</option>
						<option>2013年</option>
						<option>2012年</option>
						<option>2011年</option>
						<option>2010年</option>
						<option>2009年</option>
						<option>2008年</option>
					</select>
				</div>
				<div class="zhuztu">
					<ve-line :data="chartData" :settings="chartSettings"></ve-line>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			this.chartSettings = {
				stack: {
					'用户': ['访问用户', '下单用户']
				},
				area: true
			}
			return {
				chartData: {
					columns: ['日期', '访问用户', '下单用户', '下单率'],
					rows: [{
							'日期': '水费',
							'访问用户': 1393,
							'下单用户': 1093,
							'下单率': 0.32
						},
						{
							'日期': '电费',
							'访问用户': 3530,
							'下单用户': 3230,
							'下单率': 0.26
						},
						{
							'日期': '燃气费',
							'访问用户': 2923,
							'下单用户': 2623,
							'下单率': 0.76
						},
						{
							'日期': '宽带费',
							'访问用户': 1723,
							'下单用户': 1423,
							'下单率': 0.49
						},
						{
							'日期': '停车费',
							'访问用户': 3792,
							'下单用户': 3492,
							'下单率': 0.323
						},
						{
							'日期': '物业费',
							'访问用户': 4593,
							'下单用户': 4293,
							'下单率': 0.78
						}
					]
				}
			}
		}
	}
</script>

<style>
	.zongxiashang>span:nth-of-type(7) {
		font-weight: bold;
	}

	.zongxiashang>span:nth-of-type(6) {
		margin-left: 30px;
	}

	.zongxiashang>span:nth-of-type(5) {
		font-weight: bold;
	}

	.zongxiashang>span:nth-of-type(4) {
		margin-left: 30px;
	}

	.zongxiashang>span:nth-of-type(3) {
		font-weight: bold;
	}

	.zongxiashang>span:nth-of-type(2) {
		margin-left: 537px;
	}

	.zongxiashang>span:nth-of-type(1) {
		padding-left: 7px;
	}

	.zongxiashang>span {
		line-height: 40px;
	}

	.zongxiashang {
		height: 40px;
		border-bottom: 1px solid #CFCFFF;
		margin-bottom: 50px;
	}

	.zongxia {
		margin-left: 29px;
		margin-top: 20px;
		width: 1125px;
		height: 450px;
		border: 1px solid #CFCFFF;
	}

	.xiala>select {
		width: 130px;
	}

	.xiala {
		margin-top: -18px;
	}

	.zhuztu {
		margin-top: -3px;
	}

	.flxes {
		display: flex;
	}

	.wenz {
		margin-left: 103px;
		margin-top: -72px;
		width: 80px;
		text-align: center;
	}

	.wenz>span:nth-of-type(1) {
		font-size: 35px;
		font-weight: bold;
	}

	.img2 {
		margin-left: -10px;
		margin-top: -15px;
	}

	.biankuang {

		margin-left: 70px;
		margin-top: 30px;
		width: 202px;
		height: 85px;
		border: 1px solid black;
		border-radius: 5px;
	}

	.zhengt {
		margin-top: 30px;
		margin-left: 200px;
		border: 1px solid #CFCFFF;
		height: 1085px;
		width: 1200px;
	}

	.wuye {

		line-height: 30px;
		height: 30px;
		width: 1200px;
		margin-left: 200px;
		margin-top: 20px;
		color: white;
		font-size: 15px;
		background-image: linear-gradient(90deg, #bfadff, #d8cffe, #d8cffe, #fbfaff);
		/* linear-gradient(left,#bfadff,#d8cffe,#fbfaff); */
		font-weight: bold;
	}

	.wuye>span {
		padding-left: 10px;
	}
</style>
<style scoped="">
	.biaoge>>>.cell {
		text-align: center;
	}
</style>