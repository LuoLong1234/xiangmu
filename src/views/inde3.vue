<template>
	<div>
		<div class="wuye">
			<span>物业缴费</span>
		</div>
		<!--tab切换-->
		<div class="tab">
			<el-row>
				<el-tabs type="border-card" :span="24" v-model="editableTabsValue">
					<el-tab-pane label="缴费类型" disabled class="tou"></el-tab-pane>
					<!--水费-->
					<el-tab-pane label="水费">

						<div class="kuang1">
							<div class="kunags">
								<div v-for="(item,index) in shuzu" :key="index">
									<div class="xiaokun">
										<div class="erlib">
											<span>{{item.text}}</span>
											<span>{{item.text1}}</span>
										</div>
										<div class="xiaoq">
											<span>{{item.text2}}</span>
											<span>{{item.text3}}</span>
										</div>
										<div class="yibai">
											<span>{{item.text4}}</span>
											<span>{{item.text5}}</span>
										</div>
										<div class="lijjiaof">
											<span>{{item.text6}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="feny">
							<div class="daijiao">
								<span>待缴账单数:100/条</span>
								<span>页数:1/9</span>
								<span>每页:9/条</span>
							</div>
							<div class="fenyrs">
								<el-pagination backgroun dlayout="prev, pager, next" :total="1000"></el-pagination>
							</div>
						</div>
					</el-tab-pane>
					<!--电费-->
					<el-tab-pane label="电费">
						<div class="kuang1">
							<div class="kunags">
								<div v-for="(item,index) in shuzux" :key="index">
									<div class="xiaokun">
										<div class="erlib">
											<span>{{item.text}}</span>
											<span>{{item.text1}}</span>
										</div>
										<div class="xiaoq">
											<span>{{item.text2}}</span>
											<span>{{item.text3}}</span>
										</div>
										<div class="yibai">
											<span>{{item.text4}}</span>
											<span>{{item.text5}}</span>
										</div>
										<div class="lijjiaof">
											<span>{{item.text6}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="feny">
							<div class="daijiao">
								<span>待缴账单数:100/条</span>
								<span>页数:1/9</span>
								<span>每页:9/条</span>
							</div>
							<div class="fenyrs">
								<el-pagination backgroun dlayout="prev, pager, next" :total="1000"></el-pagination>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="停车费">
						<div class="kuang2">
							<div class="kunags">
								<div class="tinc">
									<div v-for="(item,index) in shuzu" :key="index">
										<div class="banyuan">
											<div class="shehui">
												<span>湘A23J89</span><br />
												<span>长沙xxx社会停车场</span>
											</div>
											<div class="yuankuan">
												入场时间: 2019-08-13 12:30<br />
												停车时长: 1天2小时30分<span class="yans1">05</span>秒<br />
												缴费金额: <span class="yans">20</span>元
												<div class="lij">
													<span>立即缴费</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="feny">
							<div class="daijiao">
								<span>待缴账单数:100/条</span>
								<span>页数:1/9</span>
								<span>每页:9/条</span>
							</div>
							<div class="fenyrs">
								<el-pagination backgroun dlayout="prev, pager, next" :total="1000"></el-pagination>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="燃气费">
						<div class="ranqi">
							<div class="rnaqshang">
								<div class="jaiofdanw">
									<span>缴费单位:</span>
									<select>
										<option value="111燃气有限公司">111燃气有限公司</option>
										<option value="222燃气有限公司">222燃气有限公司</option>
										<option value="333燃气有限公司">333燃气有限公司</option>
										<option value="444燃气有限公司">444燃气有限公司</option>
										<option value="555燃气有限公司">555燃气有限公司</option>
									</select>
								</div>
								<div class="yonghubianh">
									<span>用户编号:</span>
									<input type="text" value="123456" />
								</div>
								<div class="chax">
									<span>查询</span>
								</div>
								<div class="lis">
									<span>查看历史账单</span>
								</div>
							</div>
							<div>
								<div class="raqi">
									<span class="yanzs">*</span> 燃汽费用(元):
									<input type="text" disabled="disabled" placeholder="300.00" />
								</div>
								<div class="raqi">
									<span class="yanzs">*</span> 违约金(元):
									<input type="text" disabled="disabled" placeholder="300.00" />
								</div>
								<div class="raqi">
									<span class="yanzs">*</span> 应交金额(元):
									<input type="text" disabled="disabled" placeholder="300.00" />
								</div>
								<div class="raqi">
									<span class="yanzs">*</span> 当前余额(元):
									<input type="text" disabled="disabled" placeholder="300.00" />
								</div>
								<div class="raqi">
									<span class="yanzs">*</span> 未缴纳金额(元):
									<input type="text" disabled="disabled" placeholder="300.00" />
								</div>
								<div class="lijs">
									<span>立即缴费</span>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="固话宽带">
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<el-tab-pane label="个人充值缴费" name="first">
								<div class="grjaiof">
									<!--填写充值信息-->
									<div class="tianco">
										<!--上面框-->
										<div class="tianxe">
											<span>填写充值信息</span>
										</div>
										<div class="tops">
											<div class="cnaplelx">
												<span>产品类型:</span>
												<select>
													<option value="宽带">宽带</option>
													<option value="固话">固话</option>
													<option value="宽带">宽带</option>
													<option value="手机">手机</option>
												</select>
											</div>
											<div class="cnaplelxs">
												<span>所有在城市:</span>
												<span><i class="el-icon-location"></i></span>
												<span>长沙</span>
												<span>[切换城市]</span>
											</div>
											<div class="cnaplelx">
												<span>充值号码:</span>
												<input type="text" placeholder="13512322262" class="inpsu" />
											</div>
											<div class="cnaplelx">
												<span>确认号码:</span>
												<label class="haom">13512322262</label>
											</div>
										</div>
									</div>

									<div class="tianco">
										<!--上面框-->
										<div class="tianxe">
											<span>选择支付方式</span>
										</div>
										<div class="tops">
											<div class="cnaplelx">
												<span>产品类型:</span>
												<select>
													<option value="宽带">宽带</option>
													<option value="固话">固话</option>
													<option value="宽带">宽带</option>
													<option value="手机">手机</option>
												</select>
											</div>
											<div class="cnaplelxs">
												<span>所有在城市:</span>
												<span><i class="el-icon-location"></i></span>
												<span>长沙</span>
												<span>[切换城市]</span>
											</div>
											<div class="cnaplelx">
												<span>充值号码:</span>
												<input type="text" placeholder="13512322262" class="inpsu" />
											</div>
											<div class="cnaplelx">
												<span>确认号码:</span>
												<label class="haom">13512322262</label>
											</div>
										</div>
									</div>

								</div>
							</el-tab-pane>
							<el-tab-pane label="宽带包年续费" name="second">
								<div class="grjaiof">
									<!--填写充值信息-->
									<div class="tianco">
										<!--上面框-->
										<div class="tianxe">
											<span>填写充值信息</span>
										</div>
										<div class="tops">
											<div class="cnaplelx">
												<span>宽带账号:</span>
												<input type="text" placeholder="13512322262" class="inpsu" />
											</div>
											<div class="cnaplelxs">
												<span>确认账号:</span>
												<label class="haom">13512322262</label>
											</div>
											<div class="cnaplelx">
												<span>宽带密码:</span>
												<input type="text" placeholder="13512322262" class="inpsu" />
											</div>
											<div class="cnaplelx">
												<span>验证码:</span>
												<input type="text" placeholder="13512322262" class="inpsux" />
											</div>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</el-tab-pane>
					<el-tab-pane label="有线电视">
						<div class="ranqi">
							<div class="rnaqshang">
								<div class="jaiofdanw">
									<span>缴费单位:</span>
									<select>
										<option value="111广播电视有线公司">111广播电视有线公司</option>
										<option value="222广播电视有线公司">222广播电视有线公司</option>
										<option value="333广播电视有线公司">333广播电视有线公司</option>
										<option value="444广播电视有线公司">444广播电视有线公司</option>
										<option value="555广播电视有线公司">555广播电视有线公司</option>
									</select>
								</div>
								<div class="yonghubianh">
									<span>智能卡号:</span>
									<input type="text" value="123456" />
								</div>
								<div class="chax">
									<span>查询</span>
								</div>
								<div class="lis">
									<span>查看历史账单</span>
								</div>
							</div>
							<div>
								<div class="raqi">
									已购套餐:
									<input type="text" disabled="disabled" value="488.00元/年 - 单向高清全能套餐" />
								</div>
								<div class="raqi">
									缴费单位:
									<input type="text" disabled="disabled" value="111广播电视有限公司" />
								</div>
								<div class="raqi">
									缴费用户:
									<input type="text" disabled="disabled" value="111111" />
								</div>
								<div class="raqi">
									户名:
									<input type="text" disabled="disabled" value="xxx" />
								</div>
								<div class="raqi">
									地址:
									<input type="text" disabled="disabled" value="xx市xx区xx街道xx社区xx栋xx室" />
								</div>
								<div class="lijs">
									<span>立即缴费</span>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="物业费">
						<div class="ranqi">
							<div class="rnaqshang">
								<div class="jaiofdanw">
									<span>业主姓名:</span>
									<input type="text" value="小明" class="yonghubianhss" />
								</div>
								<div class="yonghubianh">
									<span>手机号码:</span>
									<input type="text" value="123456" />
								</div>
								<div class="chax">
									<span>查询</span>
								</div>
								<div class="lis">
									<span>查看历史账单</span>
								</div>
							</div>
							<div>
								<div class="raqi">
									业主姓名:
									<input type="text" disabled="disabled" value="小明" />
								</div>
								<div class="raqi">
									手机号码:
									<input type="text" disabled="disabled" value="15212311109" />
								</div>
								<div class="raqi">
									住户地址:
									<input type="text" disabled="disabled" value="xx小区xx栋xx室" />
								</div>

								<div class="jaion">
									<label>需缴纳的物业费如下：</label>
								</div>
								<div class="biaog">
									<el-table :data="tableData" border style="width: 100%">
										<el-table-column prop="date" label="日期" width="100">
											<input type="checkbox" />
										</el-table-column>
										<el-table-column prop="name" label="时间" width="100">
										</el-table-column>
										<el-table-column prop="address" label="费用/元" width="100">
										</el-table-column>
									</el-table>
								</div>
								<div class="lijs">
									<span>立即缴费</span>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shuzu: [],
				shuzux:[],
				activeName: 'first',
				editableTabsValue: '1',
				tableData: [{
						name: '2019年6月',
						address: '￥100.00'
					}, {
						name: '2019年7月',
						address: '￥100.00'
					},    
					{
						name: '2019年8月',
						address: '￥100.00'
					}
				]		
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		created() {
			this.$axios.get("https://www.fastmock.site/mock/124f584f336fc938b500c32e3b77c88b/index/test").then((res) => {
				console.log(res)
				this.shuzu = res.data.data.shuzu
				this.shuzux = res.data.data.shuzux
			})
		}
	};
</script>

<style scoped="scoped">
	.biaog {
		margin-top: 30px;
		margin-left: 299px;
		width: 301px;
	}

	.jaion {
		margin-top: 30px;
		margin-left: 300px;
	}

	.tops {
		margin-left: 160px;
	}

	.cnaplelxs {
		margin-left: 130px;
		margin-top: 20px;
	}

	.cnaplelxs>span:nth-of-type(1) {
		margin-left: -5px;
	}

	.cnaplelxs>span:nth-of-type(4) {
		color: #007FD1;
	}

	.cnaplelxs>span {
		margin-left: 10px;
	}

	.el-icon-location {
		color: #007FD1;
		font-size: 20px;
	}

	.haom {
		margin-left: 25px;
	}

	.inpsu {
		width: 300px;
		height: 25px;
		margin-left: 25px;
	}

	.inpsux {
		/* font-size: 12px; */
		width: 100px;
		height: 25px;
		margin-left: 40px;
	}

	.cnaplelx {
		margin-left: 130px;
		margin-top: 20px;
	}

	.tianxe {
		line-height: 25px;
		margin-left: 30px;
		background-color: white;
		margin-top: -17px;
		font-size: 12px;
		width: 100px;
		height: 25px;
		text-align: center;
		border: 1px solid #E4E4E4;
	}

	.tianco {
		margin-top: 34px;
		margin-left: 55px;
		height: 258px;
		border: 1px solid #E6E6FF;
		width: 939px;

	}

	.grjaiof {
		height: 630px;
		border: 1px solid #E6E6FF;

	}

	.yanzs {
		color: #FF5500;
	}

	.raqi {
		margin-left: 300px;
		margin-top: 60px;
	}

	.raqi>input {
		margin-left: 10px;
		height: 25px;
		width: 260px;
	}

	.chax {
		margin-left: 854px;
		margin-top: -38px;
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

	.lis {
		font-size: 13px;
		margin-left: 945px;
		margin-top: -35px;
		cursor: pointer;
		line-height: 35px;
		height: 35px;
		text-align: center;
		border-radius: 5px;
		width: 89px;
		color: white;
		background-color: #BDBDFF;

	}

	.yonghubianh {
		margin-top: -54px;
		margin-left: 460px;
	}

	.yonghubianh>input {
		margin-left: 10px;
		margin-top: 15px;
		height: 35px;
		width: 300px;
	}

	.yonghubianhss {
		margin-left: 10px;
		margin-top: 15px;
		height: 35px;
		width: 300px;
	}

	select {
		margin-left: 10px;
		margin-top: 15px;
		height: 35px;
		width: 300px;
	}

	.rnaqshang {
		height: 60px;
		border-bottom: 2px solid #F3F3FF;
	}

	.jaiofdanw {
		margin-left: 10px;
	}

	.ranqi {
		height: 616px;
		border: 2px solid #F3F3FF;
	}

	.lij {
		margin-top: 30px;
		line-height: 30px;
		border-radius: 5px;
		text-align: center;
		background-color: #BDBDFF;
		width: 200px;
		height: 30px;
		color: white;
	}

	.lijs {
		margin-top: 36px;
		line-height: 30px;
		border-radius: 5px;
		text-align: center;
		background-color: #BDBDFF;
		width: 247px;
		height: 30px;
		color: white;
		margin-left: 374px;
	}

	.yans {
		color: #FF6621;
	}

	.yans1 {
		font-size: 17px;
		font-weight: bold;
		color: #FF6621;
	}

	.yuankuan {
		padding-top: 10px;
		padding-left: 10px;
		font-size: 14px;
		line-height: 30px;
		margin-top: 7px;
		border: 1px solid #E6E6FF;
		width: 209px;
		height: 160px;
	}

	.shehui {
		padding-top: 30px;
		color: white;
		text-align: center;
	}

	.shehui>span:nth-of-type(1) {
		font-size: 30px;
	}

	.shehui>span:nth-of-type(2) {
		font-size: 15px;
	}

	.banyuan {
		margin-bottom: 180px;
		margin-left: 80px;
		float: left;
		margin-top: 20px;
		width: 222px;
		height: 100px;
		background-color: #C0C0FF;
		border-radius: 128px 125px 0 0;
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
		height: 60px;
		border-left: 1px solid #CFCFFF;
		border-right: 1px solid #CFCFFF;
		border-bottom: 1px solid #CFCFFF;
	}

	.lijjiaof {
		cursor: pointer;
		font-size: 15px;
		margin-top: -10px;
		margin-left: 190px;
		background-color: #B9B9FF;
		width: 70px;
		border-radius: 5px;
		height: 20px;
		color: white;
		text-align: center;
	}

	.yibai {
		margin-top: 20px;
		margin-left: 10px;
		font-weight: bold;
		color: #007FD1;
	}

	.yibai>span:nth-of-type(1) {
		color: #EE5757;
	}

	.xiaoq {
		margin-left: 10px;
		margin-top: 15px;
	}

	.xiaoq>span:nth-of-type(2) {
		padding-left: 20px;
	}

	.erlib {
		margin-top: 10px;
		font-size: 20px;
		font-weight: bold;
	}

	.erlib>span:nth-of-type(2) {
		padding-left: 30px;
	}

	.erlib>span:nth-of-type(1) {
		padding-left: 10px;
	}

	.xiaokun {
		float: left;
		margin-top: 30px;
		margin-left: 50px;
		width: 280px;
		height: 136px;
		border: 2px solid #F3F3FF;
		background-color: #F9F9FF;
		border-radius: 8px;
	}

	.kuang1 {
		border: 1px solid #E6E6FF;
		height: 529px;
	}

	.kuang2 {
		border: 1px solid #E6E6FF;
		height: 920px;
	}

	.el-tabs__item {
		padding: 0 48px;
		height: 40px;
		box-sizing: border-box;
		line-height: 40px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		font-weight: 500;
		color: #303133;
		position: relative;
	}

	.el-tabs--border-card>.el-tabs__header .el-tabs__item {
		border-left: 2px solid white;
		background-color: #007FD1;
		color: white;
	}

	.tab {
		width: 1081px;
		margin-top: 20px;
		margin-left: 254px;
	}

	.tabqh {
		margin-top: -41px;
		margin-left: 431px;
	}

	.index2 {
		cursor: pointer;
		float: left;
		line-height: 41px;
		width: 120px;
		margin-left: 10px;
		height: 42px;
		color: white;
		text-align: center;
		background-color: #2618E8;
	}

	.jaioflex {
		margin-top: 20px;
		margin-left: 254px;
		color: white;
		font-size: 20px;
		text-align: center;
		width: 149px;
		line-height: 45px;
		height: 42px;
		background-color: #2618E8;
	}

	.wuye {
		line-height: 30px;
		height: 30px;
		width: 1082px;
		margin-left: 254px;
		margin-top: 20px;
		color: white;
		font-size: 15px;
		background-image: linear-gradient(90deg, #bfadff, #d8cffe, #d8cffe, #fbfaff);
		font-weight: bold;
	}

	.wuye>span {
		padding-left: 10px;
	}

	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled {
		background-color: #623BFF;
	}

	.biaog>>>.cell {
		text-align: center;
	}
</style>
