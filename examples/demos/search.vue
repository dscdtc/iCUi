<template>
	<div>
		<ic-flexbox row=16>
			<ic-flexbox-item>
				<h1 class="title">搜索栏</h1>
			</ic-flexbox-item>
		</ic-flexbox>
		<ic-flexbox row=32 vertical>
			<ic-flexbox-item>
				<h2>demo1</h2>
			</ic-flexbox-item>
			<ic-search
				@search="searching"
			></ic-search>
			<ic-flexbox-item>
				<h2>demo2</h2>
			</ic-flexbox-item>
			<ic-search
				class="search"
				mark="点击查询对象"
				placeholder="老子要找！对！象！"
				@search="searching"
			></ic-search>
		
		</ic-flexbox>
	</div>
</template>

<script>
export default {
	methods: {
		searching (searchValue) {
			alert('你搜索的内容为：' + searchValue)
		}
	}
}
</script>


<style>
  .title {
    font-size: 20px;
	}
	.search {
		background-color: #666;
		color: black
	}
</style>
