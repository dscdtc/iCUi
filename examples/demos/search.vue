<template>
	<div>
		<ic-flexbox row=16>
			<ic-flexbox-item>
				<h1 class="title">搜索栏</h1>
			</ic-flexbox-item>
		</ic-flexbox>
		<ic-search
			class="search"
		  placeholder="请输入书名或作者名"
			@search="searching"
		></ic-search>
	</div>
</template>

<<script>
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
		background-color: red;
	}
</style>
