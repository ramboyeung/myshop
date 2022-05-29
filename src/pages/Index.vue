<template>
  <div class="hello">
    <router-view></router-view>
    <tabbar>
      <tabbarItem path="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </tabbarItem>
      <tabbarItem path="/search">
        <i class="iconfont icon-tansuo"></i>
        <span>搜索</span>
      </tabbarItem>
      <tabbarItem path="/cart">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </tabbarItem>
      <tabbarItem path="/my">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '../components/tabBar/Index'
import tabbarItem from '../components/tabBar/TabBar'

export default {
  data () {
    return {

    };
  },
  components: {
    tabbar, tabbarItem
  }
}
</script>

<style lang="less" scoped>
</style>
