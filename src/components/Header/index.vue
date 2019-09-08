<template>
  <div id="header">
      <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "喵喵电影"
        }
    }
}
</script>

<style scoped>
    #header {
        height: 50px;
        line-height: 50px;
        background-color: #e73f3f;
        text-align: center;
        color: #fff;
        width: 100%;
    }
</style>