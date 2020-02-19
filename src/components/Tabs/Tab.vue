<template>
      <li :class="this.$parent.currentIndex ==this.index?'active':''" @click="change">{{this.label}}</li>
<!--  //this.$parent.currentIndex ==this.index?'active':''-->
</template>

<script>
    export default {
        name: "Tab",
      props:{label:{
        type:String,
          default:'标题'
        },

      index:{
        type: [String,Number],
        default: '1'
      }},
      data(){
        console.log(this)
        return {
          classStyle:{
            active:this.active
          },

        }

      },
      methods:{
        change(){
          this.$parent.changeCur(this.index)
        },

      },
      mounted() {
        console.log(this.$slots.default);
        this.$parent.setContent(this)

      },
      computed:{
        active() {
          return this.$parent.currentIndex == this.index
        },
      }


    }
</script>

<style scoped>
li{
  float: left;
  width: 33%;
  height: 30px;
  text-align: center;
  cursor: pointer;
}
  .active{
    border-bottom: 3px solid blue;
  }
</style>
