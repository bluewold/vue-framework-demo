<template>
	<div class="header">
		<div class="header-left"></div>
			<div class="iconfont back-icon">&#xe606;</div>
		<div class="header-input">
			<span class="iconfont">&#xe611;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市
			<span class="iconfont arrow-icon">&#xe638;</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display:flex
		background:$bgColor
		line-height:.86rem
		color:#fff
		.header-left
			width:.64rem
			float:left
			text-align:center
			.back-icon
				text-align:left
				font-size:.4rem
		.header-input
			flex:1
			margin-top:.12rem
			height:.64rem
			padding-left:.2rem
			line-height:.64rem
			margin-left:.2rem
			margin-right:.2rem
			background:#fff
			border-radius:5px
			color:#ccc
		.header-right
			width:1.24rem
			float:right
			text-align:center
			.arrow-icon:
				margin-left:-.04rem
				font-size:.4rem
</style>
