<template>
  <div>

  <MusiclistView title="热歌榜" :songlist="hotSong"/>
  <MusiclistView title="新歌榜" :songlist="newSong"/>
  <MusiclistView title="摇滚榜" :songlist="rockSong"/>
  </div>
</template>

<script>
  //method=baidu.ting.billboard.billList&type=1&size=10&offset=0
  import MusiclistView from "./MusiclistView";
  import api from '../../api'
    export default {
        name: "Musiclist",
      components: {MusiclistView},
      data(){
          return{
              hotSong:[],
            newSong:[],
            rockSong:[],
          }
      },
      mounted() {
          api({
            method:'baidu.ting.billboard.billList',
            type:1,
            size:6,
            offset:0
          }).then(res=>{
            console.log(this)
            this.hotSong=res.data.song_list;
            console.log(res.data.song_list)})
        api({
          method:'baidu.ting.billboard.billList',
          type:2,
          size:6,
          offset:0
        }).then(res=>{
          console.log(this)
          this.newSong=res.data.song_list;
          console.log(res.data.song_list)});
        api({
          method:'baidu.ting.billboard.billList',
          type:11,
          size:6,
          offset:0
        }).then(res=>{
          console.log(this)
          this.rockSong=res.data.song_list;
          console.log(res.data.song_list)})

      }

    }
</script>

<style scoped>

</style>
