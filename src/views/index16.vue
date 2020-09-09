<template>
	<div>
		<div class="wuye">
			<span>房屋分类统计</span>
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
			<div class="xialas">
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
				<ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			this.chartSettings = {
				metrics: ['访问用户', '下单用户'],
				dimension: ['日期']
			}
			return {
				chartData: {
					columns: ['日期', '访问用户', '下单用户', '下单率'],
					rows: [{
							'日期': '毛坯',
							'访问用户': 1393,
							'下单用户': 1093,
							'下单率': 0.32
						},
						{
							'日期': '精装',
							'访问用户': 3530,
							'下单用户': 3230,
							'下单率': 0.26
						},
						{
							'日期': '豪华精装',
							'访问用户': 2923,
							'下单用户': 2623,
							'下单率': 0.76
						},
						{
							'日期': '入住',
							'访问用户': 2923,
							'下单用户': 2623,
							'下单率': 0.76
						}
					]
				}
			}
		}
	}
</script>

<style>
	.xiala>select
	{
		width: 130px;
	}
	.xialas
	{
		margin-left: 900px;
		margin-top: 20px;
	}
	.zhuztu
	{
		margin-top: 50px;
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
		height: 800px;
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
