<template>
	<div class="jrtj">
		<!--显示时间-->
		<div class="shijian">{{ nowTime}}</div>
		<!--头部搜索框-->
		<div class="sos">
			<van-search v-model="value" shape="round" background="#ffffff" placeholder="搜索食材,菜谱" />
		</div>
		<!--下方按钮-->
		<div>
			<van-tabs>
				<van-tab v-for="(item,index) in name" :title="item" :key='index'>
					<!-- 关注-->
					<div v-show="index==0">
						<div class="img14">
							<div>
								<img src="../assets/img/9.png" width="60%" /><br />
								<span>写笔记</span>
							</div>
							<div>
								<img src="../assets/img/10.png" width="55%" /><br />
								<span>笔记广场</span>
							</div>
						</div>
						<div class="haoy">
							<span>暂无好友数据</span><br />
							<span>快去关注更多好友吧</span>
						</div>
					</div>
					<!--今日推荐-->
					<div v-show="index == 1">
						<div class="zaopian">
							<van-swipe @change="onChange">
								<van-swipe-item><img src="../../public/img/IMG_4066.png" width="100%" />
									<div class="ico">
										<van-icon name="like-o" @click="most()" />
										<van-icon name="like" color="red" v-show="ishh" @click="most1()" class="icos" />
									</div>
									<span class="quanm">营养全面又好吃~蒸米粉</span>
								</van-swipe-item>
								<van-swipe-item><img src="../../public/img/4.png" width="100%" />
									<div class="ico">
										<van-icon name="like-o" @click="most()" />
										<van-icon name="like" color="red" v-show="ishh" @click="most1()" class="icos" />
									</div>
									<span class="quanm">营养全面又好吃~蒸米粉</span>
								</van-swipe-item>
								<van-swipe-item><img src="../../public/img/5.png" width="100%" />
									<div class="ico">
										<van-icon name="like-o" @click="most()" />
										<van-icon name="like" color="red" v-show="ishh" @click="most1()" class="icos" />
									</div>
									<span class="quanm">营养全面又好吃~蒸米粉</span>
								</van-swipe-item>
								<van-swipe-item><img src="../../public/img/IMG_4080副本.png" width="100%" />
									<div class="ico">
										<van-icon name="like-o" @click="most()" />
										<van-icon name="like" color="red" v-show="ishh" @click="most1()" class="icos" />
									</div>
									<span class="quanm">营养全面又好吃~蒸米粉</span>
								</van-swipe-item>
							</van-swipe>
						</div>

						<!--第二个切换-->
						<div>
							<div class="hej">
								<span>合集</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>

						<div class="gengdu">
							<span>更多美味</span>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../../public/img/IMG_4091副本.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--会员专属-->
					<div v-show="index == 2">
						<div>
							<div class="hej">
								<span>专治夏日没胃口</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>在家做特色小吃</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>中国胃也爱的健康轻食</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>凉拌汁的秘诀:黄金配比</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>13种健康不重样的三明治</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>零失败加常面点</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>简单好做的异国风味</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>锻炼科学补充能量</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>合集</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div>
							<div class="hej">
								<span>15分钟快手一锅出</span>
							</div>
							<van-swipe class="my-swipe">
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<img src="../../public/img/4.png" width="33%" />
									<img src="../../public/img/5.png" width="33%" />
									<img src="../../public/img/4.png" width="33%" />
									<div class="mianf1">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf2">
										<span>免费蛋糕</span>
									</div>
									<div class="mianf3">
										<span>免费蛋糕</span>
									</div>
								</van-swipe-item>
							</van-swipe>
						</div>
					</div>
					<!--排行榜-->
					<div v-show="index == 3">
						<div>
							<div class="div1">
								<div class="res">
									<h6>热搜榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>飙升榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>人气榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>新秀榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>新手榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>早餐榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>小吃榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

							<div class="div1">
								<div class="res">
									<h6>蛋糕榜</h6>
								</div>
								<div class="paihang">
									<van-swipe class="my-swipe">
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf2">
												<span>免费蛋糕</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
										<van-swipe-item>
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<img src="../../public/img/IMG_4099副本.png" width="33%" />
											<div class="mianf1">
												<span>1.可乐鸡翅</span>
											</div>
											<div class="mianf2">
												<span>2.番茄炒蛋</span>
											</div>
											<div class="mianf3">
												<span>免费蛋糕</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</div>

						</div>
					</div>
					<!--早餐达人-->
					<div v-show="index==4">
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />
							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/11.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--新手不翻车-->
					<div v-show="index==5">
						<div class="img12">
							<img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/12.png" width="90%" /><img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/12.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--家常菜能手-->
					<div v-show="index==6">
						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/13.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--懒人一锅出-->
					<div v-show="index==7">
						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/14.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--主食控-->
					<div v-show="index==8">
						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/15.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--爱吃肉肉-->
					<div v-show="index==9">
						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>

						<div class="img12">
							<img src="../assets/img/16.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
					<!--甜食至上-->
					<div v-show="index==10">
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
						<div class="img12">
							<img src="../assets/img/17.png" width="90%" />
							<div class="icoss">
								<van-icon name="like-o" @click="most2()" />
								<van-icon name="like" color="red" v-show="ishhs" @click="most3()" class="icos" />
							</div>
						</div>
						<div class="dinz">
							<div class="img13">
								<img src="../../public/img/7.png" width="50" />

							</div>
							<div class="xiaoy">
								<span>小宇 KL14f</span>
							</div>
							<div class="zhengw">
								豆皮水没有干,所以带汤了,如果控干了水,一定更好吃!
							</div>
							<div class="dopzop">
								<img src="../../public/img/6.png" width="70%" />
							</div>
						</div>
					</div>
				</van-tab>
			</van-tabs>

		</div>
		<!--底部代码-->
		<div class="webu">
			<van-tabbar v-model="active">
				<router-link to="/" tag="van-tabbar-item">
					<van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
				</router-link>
				<router-link to="/jihua" tag="van-tabbar-item">
					<van-tabbar-item icon="search">计划</van-tabbar-item>
				</router-link>
				<router-link to="/socang" tag="van-tabbar-item">
					<van-tabbar-item icon="like-o">收藏</van-tabbar-item>
				</router-link>
				<router-link to="/denglu" tag="van-tabbar-item">
					<van-tabbar-item icon="smile-o">我的</van-tabbar-item>
				</router-link>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowDate: "", // 当前日期
				nowTime: "", // 当前时间
				nowWeek: "", // 当前星期
				dialogTableVisible: false,
				active:0,
				current: 0,
				name: ["关注", "今日推荐", "会员专属", "排行榜", "早餐达人", "新手不翻车", "家常菜能手", "懒人一锅出", "主食控", "爱吃肉肉", "甜食至上"],
				ishh: false,
				value: '',
				ishhs: false
			}
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
			most() {
				this.ishh = true
			},
			most1() {
				this.ishh = false
			},
			most2() {
				this.ishhs = true
			},
			most3() {
				this.ishhs = false
			},
			currentTime() {
				setInterval(this.getDate, 500);
			},
			getDate: function() {
				var _this = this;
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let week = new Date().getDay();
				let hh = new Date().getHours();
				let ms =
					new Date().getSeconds() < 10 ?
					"0" + new Date().getSeconds() :
					new Date().getSeconds();
				let mf =
					new Date().getMinutes() < 10 ?
					"0" + new Date().getMinutes() :
					new Date().getMinutes();
				if (week == 1) {
					this.nowWeek = "星期一";
				} else if (week == 2) {
					this.nowWeek = "星期二";
				} else if (week == 3) {
					this.nowWeek = "星期三";
				} else if (week == 4) {
					this.nowWeek = "星期四";
				} else if (week == 5) {
					this.nowWeek = "星期五";
				} else if (week == 6) {
					this.nowWeek = "星期六";
				} else {
					this.nowWeek = "星期日";
				}
				_this.nowTime = hh + ": " + mf + ": " + ms;
				_this.nowDate = yy + "/" + mm + "/" + dd;
			}
		},
		mounted() {
			this.currentTime();
		},
		// 销毁定时器
		beforeDestroy: function() {
			if (this.getDate) {
				console.log("销毁定时器");
				clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
			}
		}
	}
</script>

<style>
	.van-swipe__indicators {
		position: absolute;
		bottom: 0.16rem;
		left: 50%;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		display: none !important;
	}

	.paihang {
		margin: -90px 0px 0px 0px;
	}

	.haoy {
		color: #bbbbbb;
		text-align: center;
		/* margin-right: 400px; */
		margin-top: 500px;
		/* text-align: center; */
		/* width: 200px; */
		font-size: 30px;
	}

	.img14 {

		margin-top: 20px;
		text-align: center;
		font-size: 30px;
		display: flex;
	}

	.div1 {
		height: 503px;
		margin: -18px 0px -57px 0;
	}

	.van-tabbar-item__icon .van-icon {
		display: block;
		min-width: 1em;
		font-size: 60px;
	}

	.res {
		margin: -70px 0 0 16px;
	}

	.xiaoy {
		font-size: 35px;
		font-weight: bold;
		margin: -95px 0px 0 -150px;
	}

	.van-swipe-item {
		list-style: none;
	}

	.zaopian {
		margin: 10px 0px 0px 0px;
	}

	.zaopian>img {
		width: 100%;
	}

	.quanm {
		display: inline-block;
		margin-top: 40px;
		margin-left: 30px;
		font-size: 40px;
	}

	.ico {
		color: white;
		margin: -103px 0 0 19px;
	}

	.icos {
		margin: 0 0 0 -72px;
	}

	.icoss {
		color: white;
		margin: -110px 0 0 -540px;
	}

	.my-swipe .van-swipe-item {
		color: black;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: white;
	}

	.hej {
		margin-top: 20px;
		margin-left: 28px;
		margin-bottom: 20px;
		font-size: 40px;
	}

	.mianf {
		text-align: center;
		font-size: 32px;
		/* float: left; */
		margin: -100px 0px 0px 80px;
	}

	.mianf1 {
		font-size: 32px;
		margin: -100px 0px 0px -530px;
	}

	.mianf2 {
		font-size: 32px;
		margin: -150px 0px 0px -30px;
	}

	.mianf3 {
		font-size: 32px;
		margin: -150px 2px 0px 500px;
	}

	.gengdu {

		margin-left: 30px;
		font-size: 40px;
	}

	.img12 {
		margin-top: 20px;
		text-align: center;
	}

	.dinz {
		text-align: center;
		margin-top: 15px;
		margin-left: 30px;
		width: 673px;
		height: 400px;
		border-radius: 10px;
		background-color: #f7f7f7;
	}

	.img13 {
		padding-top: 23px;
		padding-right: 500px;
	}

	.zhengw {
		text-align: left;
		width: 600px;
		margin-top: 40px;
		margin-left: 30px;
		font-size: 30px;
	}

	.dopzop {
		margin-right: 460px;
		margin-top: 30px;
	}

	.van-tabbar {
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: content-box;
		width: 100%;
		height: 1.66667rem;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #fff;
	}

	.shijian {

		font-size: 40px;
		text-align: center;
	}
</style>
