<!-- 首页 -->
<template>
	<view class="home-wrap u-m-b-20">
		<u-no-network :connected="init"></u-no-network>
		<view class="content-box">
			<!-- 导航栏 -->
			<homeHeader :isScorllDown="isScorllDown"></homeHeader>

			<!-- 热卖+分类选项卡 -->
			<!-- <sh-category-tabs
				v-if="categoryTabsData && categoryTabsData.category_arr && categoryTabsData.category_arr.length"
				:enable="enable" :styleType="categoryTabsData.style" :tabsList="categoryTabsData.category_arr">
			</sh-category-tabs> -->
			<view v-for="item in 100" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	import homeHeader from './components/home-header.vue';
	import test from "./components/test.vue"
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	export default {
		components: {
			homeHeader,
			test
		},
		data() {
			return {
				isScorllDown: false
			};
		},
		computed: {
			// 头部模块数据
			headSwiperList() {
				if (this.homeTemplate?.length) {
					return this.homeTemplate[0]?.content?.list;
				}
			},
			// 分类选项卡数据
			categoryTabsData() {
				if (this.homeTemplate?.length) {
					return this.homeTemplate[this.homeTemplate.length - 1]?.content;
				}
			}
		},
		onPullDownRefresh() {
			this.init();
		},
		onPageScroll(e) {
			this.isScorllDown = e.scrollTop > 150;
		},
		onShow() {
			this.init();
		},
		onLoad() {
			// #ifdef APP-VUE
			// app隐私协议弹窗
			if (!plus.runtime.isAgreePrivacy()) {
				this.showPrivacy = true;
				this.showNoticeModal = false;
			}
			// #endif
		},
		methods: {
			// 初始化
			init() {
				uni.showToast({
					title: "已联网"
				})
				// 	return Promise.all([this.getTemplate()]).then(() => {
				// 		uni.stopPullDownRefresh();
				// 	});
			}
		}
	};
</script>

<style lang="scss"></style>
