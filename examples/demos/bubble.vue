<template>
	<div>
		<ic-flexbox row=16>
			<ic-flexbox-item>
				<h1 class="title">气泡</h1>
			</ic-flexbox-item>
		</ic-flexbox>
		<ic-button @click="display=!display" ripple>点击显示</ic-button>
		<ic-bubble v-show="display" pos='top:64px;right:16px'>
			<li>1111111111</li>
			<li>2222222222</li>
			<li>3333333333</li>
			<li>4444444444</li>
			<li>5555555555</li>
			<li>6666666666</li>
		</ic-bubble>
	</div>
</template>

<style>
  .title {
    font-size: 20px;
  }
</style>

<script>
export default {
	data(){
		return {
			display: false
		}
	}
}
</script>
