<template>
  <div class="lrcContainer">
    <div class="lrc" v-if="lrcData" ref="lrc">
<!--      <p v-if="cur>allTime[index]&&cur<allTime[index+1]" v-for="(value,name,index) in lrcData" :key="index">{{ value }}</p>-->
      <p :class="cur>allTime[index]&&cur<allTime[index+1]?'active':''" v-for="(value,name,index) in lrcData" :key="index">{{ value }}{{scrollLrc(index)}}</p>

    </div>
  </div>
</template>

<script>
  import api from '../api'

  export default {
    name: "lirc",
    props: ['id','cur'],
    data() {
      return {
        lrcData: {},

        allTime:[],
      }
    },
    watch:{
      cur(value){
        // console.log(value)
      }
    },

    methods: {
      filterLrcStyle(values) {
        var lrcArr = {};
        var lyrics = values.lrcContent.split("\n");
        // "[00:01.50:'一刹那恍惚 若有所失的感觉3']"
        // {180:一刹那恍惚 若有所失的感觉}
        var reg = /\[\d*:\d*(\.|:)\d*]/g;
        for(var i = 0;i<lyrics.length;i++){
          var timeRegArr = lyrics[i].match(reg);
          if(!timeRegArr) continue; // 跳过null
          // 获取时间
          var t = timeRegArr[0];
          // 正则匹配取出分 [02:28.13]
          var min = parseInt(t.match(/\[\d*/i).toString().slice(1)); // 02
          // 正则匹配取出秒
          var sec = parseInt(t.match(/\:\d*/i).toString().slice(1));
          // time完整时间
          var time = min * 60 + sec;
          // 获取内容
          var content = lyrics[i].replace(timeRegArr,"");
          // console.log(content)
          lrcArr[time] = content;
        }
        this.lrcData = lrcArr;
        this.getAlltime(lrcArr);
        // console.log(this.lrcData)
      },
      getAlltime(arr){
        for (var key in arr){
          this.allTime.push(parseInt(key))
        }
      },
      scrollLrc(index){
        if (this.cur>this.allTime[index]&&this.cur<this.allTime[index+1]){
          this.$refs.lrc.style.top=-(30*(index-2)/2)+"px";
        }
      }
    },
    created() {
      console.log(this.id)
      api({
        method: 'baidu.ting.song.lry',
        songid: this.id
      }).then(res => {
        this.filterLrcStyle(res.data);
        //处理数据

      })

    }

  }
</script>

<style scoped>
  .active {
    color: red;
  }

  .lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
    text-align: center;
  }

  .lrc {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .lrc-p {
    height: 30px;
    line-height: 30px;
  }

  .up30 {
    margin-top: -30px;
  }
</style>
