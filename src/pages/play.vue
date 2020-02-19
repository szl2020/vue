<template>
  <div class="play" v-if="songInfo.songinfo">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ songInfo.songinfo.title }}</p>
          <p class="author">{{ songInfo.songinfo.author }}</p>
        </div>
        <i class="iconfont icon-sousuo right"></i>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="songInfo.songinfo.pic_big" alt="">
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <lirc :id="id" :cur="curTime"/>
    <div class="song">
      <audio ref="player"  :src="songInfo.bitrate.show_link" controls></audio>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import api from '../api'
  import lirc from './lirc'
  export default {
    name: "Player",
    components:{
      lirc,
    },
    data() {
      return {
        songInfo:{},
        id:this.$route.params.id,
        curTime:''
      };
    },

    created() {
      api({
        method:"baidu.ting.song.play",
        songid:this.id
      }).then(res => {
        this.songInfo = res.data;
        this.$nextTick(function () {
            this.getCurtime();
        })
      })
    },
    methods:{
      getCurtime(){
        this.$refs.player.ontimeupdate=()=>{
          this.curTime = this.$refs.player.currentTime;
        }
      }
    }
  };
</script>
<style scoped>
  .header {
    padding: 15px;
  }

  .music-info {
    flex: 1;
    font-size: 20px;
  }

  .title {
    display: flex;
    text-align: center;
  }

  .left {
    font-size: 30px;
  }

  .ca {
    color: red;
  }

  .right {
    font-size: 30px;
  }

  .song-info {
    padding: 15px;
  }

  .song-info-img {
    text-align: center;
  }

  .song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
  }

  .song-lrc {
    margin-top: 10px;
    min-height: 50px;
  }

  .iconbox {
    display: flex;
    margin-top: 30px;
  }

  .iconbox .box {
    flex: 1;
  }

  .song {
    width: 100%;
    text-align: center;
  }

  .song audio {
    width: 80%;
  }

  .active {
    color: #222;
  }

  .author {
    font-size: 12px;
    color: #999;
  }
</style>
