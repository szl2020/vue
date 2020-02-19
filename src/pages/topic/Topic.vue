<template>
    <div>
榜单
      <Tabs :currentIndex="currentIndex" @change="changeCur">
        <Tab label="标题1" index="1">
              内容一
        </Tab>
        <Tab label="标题2" index="2">
          内容二

        </Tab>
        <Tab label="标题3" index="3">
          内容三

        </Tab>

      </Tabs>
    </div>
</template>

<script>

    import Content from "../../components/Tabs/content";


    export default {
        name: "Topic",
      components: {Content},
      data(){
          return{
            currentIndex:'1'
          }
      },
      methods:{
          changeCur(index){
            this.currentIndex= index
          }
      }
    }
</script>

<style scoped>

</style>
