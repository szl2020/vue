<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{ title }}</h3>
        <a href="#">更多</a>
      </div>
      <div class="list clearfix">
        <!--
            0 1 2 3 4 5
            1  4需要padding属性
         -->
        <router-link
          :to="'/play/'+item.song_id"
          class="item"
          v-for="(item,index) in songlist"
          :key="index"
          :class="{'clear-padding' : index%3 !== 1 }"
        >
          <div class="img-warpper">
            <img :src="item.pic_big" alt />
          </div>
          <div class="main">{{ cutTitle(item.title) }}</div>
          <div class="gray">{{ cutTitle(item.author) }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MusicListView",
    props:{
      songlist:{
        type:Array,
        required:true
      },
      title:{
        type:String,
        default:"歌曲榜"
      }
    },
    methods:{
      cutTitle(title){
        // 自己测试的最大长度是8，css部分处理一样可以。
        if(title.length > 8){
          return title.substring(0,8)+ "..."
        }else{
          return title
        }
      }
    }
  };
</script>
<style lang="less" scoped>
  .collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
  }

  .block-padding {
    padding: 10px 17px;
    background-color: #fff;
  }

  .title {
    display: flex;
    margin: 14px 0 18px;
  }

  .title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
  }

  .list {
    width: 100%;
  }

  .list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .clear-padding {
    padding: 0 !important;
  }

  .main {
    margin-top: 4px;
    font-size: 12px;
  }

  .gray {
    font-size: 12px;
    color: #999;
  }

  .btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
  }
</style>
