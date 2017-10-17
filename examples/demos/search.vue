<template>
	<div>
		<ic-flexbox row=16>
			<ic-flexbox-item>
				<h1 class="title">搜索栏</h1>
			</ic-flexbox-item>
		</ic-flexbox>

		<ic-search
			ref="search"
			:placeholder="placeholder">
		</ic-search>

		<ic-flexbox row=16>
			<ic-button @click="setFocus">手动获取焦点</ic-button>
		</ic-flexbox>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			placeholder:'搜索'
		}
	},
	methods: {
		setFocus(){
			console.log(123)
			this.$refs.search.setFocus()
		}
	}
}
</script>


<style>
 
</style>
