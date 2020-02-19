<template>
  <div class="tabs" >
    <tabs v-if="allMusicData.length>0" :currentIndex="currentIndex" @change="changeCur">
      <tab
        v-for="(element,index) in allMusicData"
        :key="index"
        :index="index+1"
        :label="element.billboard.name"
      >
        <div class="panel hotsongs on">
          <ul class="list">
            <router-link
              class="song url"
              tag="li"
              v-for="(item,index) in element.song_list"
              :key="index"
              :to="'/play/'+item.song_id"
            >
              <div class="poster">
                <img :src="item.pic_big" :alt="item.pic_big">
              </div>
              <div class="info">
                <div class="name">{{ item.title }}</div>
                <div class="author">{{ item.author }}</div>
              </div>
            </router-link>
          </ul>
        </div>
      </tab>
    </tabs>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    name:"MusicTab",
    data(){
      return{
        currentIndex:"1",
        allMusicData:[]
      }
    },
    methods:{
      changeCur(index){
        this.currentIndex= index
      }
    },
    created() {
      function getNewMusic(){
        return axios.get("/baidu/v1/restserver/ting",{
          params:{
            method:"baidu.ting.billboard.billList",
            type:1,
            size:5,
            offset:0
          }
        })
      }
      function getHotMusic(){
        return axios.get("/baidu/v1/restserver/ting",{
          params:{
            method:"baidu.ting.billboard.billList",
            type:2,
            size:5,
            offset:0
          }
        })
      }
      function getRockMusic(){
        return axios.get("/baidu/v1/restserver/ting",{
          params:{
            method:"baidu.ting.billboard.billList",
            type:11,
            size:5,
            offset:0
          }
        })
      }

      axios.all([getNewMusic(),getHotMusic(),getRockMusic()]).then(
        axios.spread((newsData,hotData,rockData) =>{
          // 三个请求现在都执行完成
          this.allMusicData.push(newsData.data,hotData.data,rockData.data);
        })
      )
    },
  }
</script>
<style lang="less" scoped>

  .tabs {
    padding: 10px;
    background: #fff;

  }
  .musictop {
    background: #fff;
    padding: 10px;
  }


  .panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
  }

  .list {
    padding-top: 0;
    height: 375px;
  }

  .panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
  }

  .panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
  }

  .panel .list li .poster img {
    border: 1px solid #eee;
  }
  .info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
  }

  .info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }

  .more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }

</style>
