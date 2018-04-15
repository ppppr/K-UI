<template>
  <div class="side-nav">
    <ul>
      <li class="nav-item">
        <div class="nav-group">
          <router-link
            class="nav-title-item"
            to="/" >安装</router-link>
          <!-- <router-link
            active-class="active"
            class="nav-title-item"
            :to="base + '/quickstart'" >快速上手</router-link> -->
        </div>
      </li>
      <li class="nav-item">
        <a href="javascript:void(0)" style="cursor: auto; margin-top: 10px">组件</a>
        <div class="nav-group">
          <div class="nav-group__title">基础组件</div>
          <ul class="pure-menu-list">
            <li class="nav-item">
              <router-link
                active-class="active"
                :to="base + '/button'" >button</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    base: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.side-nav {
	flex: 0 0 250px;
	box-sizing: border-box;
	padding: 40px 0;
  border-right: 1px solid #e5e5e5;
  .nav-title-item {
    &:hover {
      color: #3388FF;
    }
  }
	li {
		list-style: none;
	}
	ul {
		padding: 0;
		margin: 0;
		overflow: hidden;
	}
	.nav-item {
		a {
			font-size: 16px;
			color: #333;
			line-height: 40px;
			height: 40px;
			margin: 0;
			padding: 0;
			text-decoration: none;
			display: block;
			position: relative;
			transition: all .3s;
			padding: 0 20px;
			&.active {
				color: #3388FF;
				background-color: #f5f7fa;
			}
		}
		.nav-item {
			a {
				display: block;
				height: 40px;
				line-height: 40px;
				font-size: 14px;
				padding-left: 44px;
				&:hover {
					color: #3388FF;
				}
			}
		}
	}
	.nav-group__title {
		font-size: 12px;
		color: #666;
		padding-left: 28px;
		line-height: 26px;
    margin-top: 10px;
	}
}
</style>