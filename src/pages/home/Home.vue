<template>
  <div>
    <Musiclist/>
    <Swiper :banner="banner"/>
    <MusicTab/>
  </div>
</template>

<script>
  import Musiclist from "./Musiclist";
  import Swiper from '../../components/swiper'
  import pic1 from '../../assets/images/b1.jpg'
  import pic2 from '../../assets/images/b2.jpg'
  import pic3 from '../../assets/images/b3.jpg'
import MusicTab from "./MusicTab";
  export default {
        name: "Home",
      components:{
        MusicTab,
        Musiclist,
        Swiper,
      },
      data(){
          return{
            banner:[pic3,pic2,pic1],

          }
      },



    }
</script>

<style scoped>

</style>
