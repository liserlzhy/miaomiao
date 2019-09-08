<template>
  <ul id="navbar">
    <router-link tag="li" to="/movie" >
      <i class="iconfont icon-dianying "></i>
      <p>电影</p>
    </router-link>
    <router-link tag="li" to="/cinema" >
      <i class="iconfont icon-dianying1"></i>
      <p>影院</p>
    </router-link>
    <router-link tag="li" to="/mine" >
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    #navbar {
        position: fixed;
        bottom: 0;
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 50px;
        li {
            flex: 1;
            background-color: #fff;
            text-align: center;
            padding: 5px 0px;
            p {
              margin-top: 5px;   
            }
        }
        li.router-link-active {
          color: #e73f3f;
        }
    }
    
</style>