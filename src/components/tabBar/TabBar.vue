<template>
  <div class="tab-bar-item" @click="itemClick" :style="this.activeStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    },
    isActive () {
      if (this.$route.path === this.path) {
        return true;
      } else {
        return false;
      }
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#900"
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  /* text-align: center; */
  height: 49px;
  /* line-height: 49px; */
  font-size: 14px;

  display: flex;
  flex-direction: column; /* 控制文字和图标竖着排列*/
  justify-content: center; /* 控制文字和图标居中*/
}
</style>
