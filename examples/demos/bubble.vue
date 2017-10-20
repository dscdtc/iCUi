<template>
	<div>
		<ic-flexbox row=16>
			<ic-flexbox-item>
				<h1 class="title">气泡</h1>
			</ic-flexbox-item>
		</ic-flexbox>
		<ic-flexbox row=64 vertical>
			<h2>底部气泡</h2>
			<ic-flexbox-item style="position:relative;">
				<ic-button @click="show1" ripple>点击显示底部气泡</ic-button>
				<ic-bubble pos='top:55px;right:10px' ref="bubble1">
					<li><ic-icon name="search" style="margin-right:10px"></ic-icon>阿斯蒂芬阿斯</li>
					<li @click="test">2222222222</li>
					<li>3333333333</li>
					<li>4444444444</li>
				</ic-bubble>
			</ic-flexbox-item>
			<h2>顶部气泡</h2>
			<ic-flexbox-item style="position:relative;">
				<ic-button @click="show2" ripple>点击显示顶部气泡</ic-button>
				<ic-bubble pos='top:-162px;right:10px' ref="bubble2" up>
						<li>1111111111</li>
						<li>2222222222</li>
						<li>3333333333</li>
						<li>4444444444</li>
				</ic-bubble>
			</ic-flexbox-item>
		</ic-flexbox>
	</div>
</template>

<style>
  .title {
    font-size: 20px;
  }
</style>

<script>
export default {
	methods: {
		show1 () {
			this.$refs.bubble1.show()
		},
		test () {
			alert('fuck you!')
		},
		show2 () {
			this.$refs.bubble2.show()
		}
	}
}
</script>
