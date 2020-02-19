<template>
  <div id="app">
    <keep-alive include="layout">

    <router-view/>
    </keep-alive>
    <backtop/>
  </div>
</template>

<script>
  import backtop from "./components/backTop/backtop";
export default {
  name: 'App',
  components:{
    backtop,
  }

}
</script>

<style>

</style>
