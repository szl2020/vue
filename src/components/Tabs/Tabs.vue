<template>
  <div>
    <ul>
      <slot></slot>
    </ul>
    <Content :showContent="content"/>
  </div>

</template>

<script>
    import Content from "./content";
    export default {
        name: "Tabs",
      components: {Content},
      props:{
          currentIndex:{
            type:[String,Number],
            default:1,
          }
      },
      methods:{
        changeCur(cs){
          this.$emit('change',cs)
        },
        setContent(cs){
          this.content.push(cs);
        }
      },
      data(){
          return {
            content:[],
          }
      }
    }
</script>

<style scoped>

</style>
