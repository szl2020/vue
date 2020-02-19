<template>
  <swiper :options="swiperOption" class="myswiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  export default {
    name: 'carrousel',
    props:['banner'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        },
        swiperSlides:this.banner
      }
    },
    mounted() {
      console.log(this.banner)
      setInterval(() => {

        if (this.swiperSlides.length < 3) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>

<style lang="less" scoped>
  .myswiper{
    height: 200px;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
