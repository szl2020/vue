<template>
    <div>
      <ul>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "serachList",
      props:{
          data:{
            type:Object,
            default:{},
          }
      },
  mounted() {
    console.log(this.data.album)
  }
    }
</script>

<style scoped>

</style>
