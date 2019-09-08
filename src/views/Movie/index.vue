<template>
  <div>
      <Header></Header>
        <div id="content">
          <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
              <span>{{ $store.state.city.name }}</span><i class="iconfont icon-jiantou 
"></i>
            </router-link>
            <div class="hot_switch">
              <router-link  tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
              <router-link  tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search_entry">
              <i class="iconfont icon-sousuo"></i>
            </router-link>
          </div>
           <keep-alive>
              <router-view />
            </keep-alive>
        </div>
      <NavBar></NavBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import { messageBox } from '@/components/JS'

export default {
  name: 'Movie',
  components: {
    Header,
    NavBar,
  },
  mounted(){
    // this.axios({
    //   url: 'https://m.maizuo.com/gateway?k=9271004',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15653786341017907249395"}',
    //     'X-Host': 'mall.film-ticket.city.list',
    //   }
    // }).then(res => {
    //   messageBox({
    //     title: '定位',
    //     content: '北京',
    //     cancel: '取消',
    //     ok: '切换定位',
    //     handleOk(){
    //       // console.log(2)
    //     }
    //   })
    // })
  }
}
</script>

<style scoped lang="scss">
  .movie_menu {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #c7c2c2 solid;
    .hot_switch {
      display: flex;
      .hot_item{
        padding: 0 10px;
      }
      
    }
     .router-link-active {
        color: #e73f3f;
        border-bottom: 2px #e73f3f solid;
        .icon-jiantou {
          color: #e73f3f;
        }
      }
    .icon-sousuo {
      font-size: 20px;;
    }
    .icon-jiantou {
      color: #888;
      font-size: 13px;
      margin-left: 5px;
    }
}
  
</style>