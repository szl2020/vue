<script>
  export default {
    name: "content",
    props: ['showContent'],
    mounted() {
      console.log(this.showContent)
    },
    render() {
      return (

        <div>
        {
          this.showContent.map((ele,index)=>{
            return <div>{ele.active?ele.$slots.default:''}</div>
          })
        }
        </div>
      )
    },
  }
</script>

<style scoped>

</style>
