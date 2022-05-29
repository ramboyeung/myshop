<template>
  <div class="home-container">
    <headApp></headApp>
    <Swiper :swiperImg="fatherSwiperImg"></Swiper>
    <button class="btn" @click="del(1)">删图片</button>
  </div>
</template>

<script>
import headApp from './HeadApp';
import Swiper from './Swiper';
import axios from 'axios';

export default {
  components: { headApp, Swiper },
  data () {
    return {
      fatherSwiperImg: []
    }
  },
  created () {
    axios.get("http://localhost:3003/slideimgs").then((res) => {
      //console.log(res.data.data.slideimgs);
      this.fatherSwiperImg = res.data.data.slideimgs;
    })
  },
  methods: {
    del (id) {
      axios.get("http://localhost:3003/slideimgs?id=" + id).then((res) => {
        //console.log(res.data.data.slideimgs);
        console.log(res);
      });
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 200px;
  border: none;
}
</style>
