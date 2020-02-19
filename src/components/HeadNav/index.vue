<template>
    <div>
      <ul>

          <router-link tag="li" exact to="/">首页</router-link>


          <router-link tag="li" to="/topic">榜单</router-link>

          <router-link tag="li" to="/search">搜索</router-link>

          <router-link tag="li" to="/mine">我的</router-link>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style  lang="less" scoped>
  div{
    background: white;
  }
li{
  float: left;
  width: 25%;
  text-align: center;
  padding-top: 10px;
}
  .active{
    border-bottom: 2px solid #ff0000;
  }

</style>
