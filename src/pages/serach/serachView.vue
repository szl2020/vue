<template>
    <div class="serach">
      <input type="text" v-model="res" class="print"  @change="serach" >
     <div >
       <div class="list clearfix">
         <!--
             0 1 2 3 4 5
             1  4需要padding属性
          -->
         <router-link
           :to="'/play/'+item.songid"
           class="item"
           v-for="(item,index) in data"
           :key="index"
           tag="li"
         >
           <div class="img-warpper">
<!--             <img :src="item1.artispic" alt />-->
           </div>
           <div class="main">{{ item.songname }}</div>
           <div class="gray">{{ item.artistname }}</div>
         </router-link>
       </div>
     </div>
    </div>
</template>

<script>
  import api from '../../api'
  import serachlist from "./serachList";
    export default {
        name: "serachView",
      components:{
        serachlist
      },
      data(){
          return{
            res:'',
            data:{},
            flag:false,
            data2:[],
          }
      },
      methods:{
          //method=baidu.ting.search.catalogSug&query
          serach(){
            this.data='';
            console.log(this.res);
            api({
              method:'baidu.ting.search.catalogSug',
              query:this.res,
            }).then(res=>{
              console.log(res.data)
              this.data=res.data.song;
              this.data2= res.data.album
              this.flag=true;
            })
          },
        key(){
          console.log(123)
        }


      }

    }
</script>

<style scoped>
  .serach{
    margin-top: 10px;
    padding: 0 30px;
  }
.print{
  border: 1px solid gray;
  width: 90%;
  border-radius: 10px;
  padding: 0 10px;
}
  .btn{
    height: 27px;
    margin-left: 10px;
    width: 50px;
  }
  .show{
    height: 40px;
    font-size: 16px;
  }
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
    width: 100%;
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
  li{
    width: 100%;
  }
</style>
