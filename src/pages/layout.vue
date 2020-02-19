<template>
    <div>
      <index/>
      <router-view></router-view>
    </div>
</template>

<script>
  import index from '../components/HeadNav'
    export default {
        name: "layout",
      components:{
          index,
      }
    }
</script>

<style scoped>

</style>
