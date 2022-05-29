<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperImg" :key="item.id">
        <img :src="item.from" alt="" class="sw" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import mySwiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  props: ['swiperImg'],
  mounted () {
    new mySwiper('.swiper-container', {
      loop: true,
      speed: 800,
      direction: "horizontal",
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 0,
      observer: true,
      observerParents: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  }
}
</script>

<style lang="less" scoped>
.sw {
  width: 100%;
}
</style>
