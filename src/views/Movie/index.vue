<template>
  <div>
      <Header></Header>
        <div id="content">
          <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
              <span>大连</span><i></i>
            </router-link>
            <div class="hot_switch">
              <router-link  tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
              <router-link  tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search_entry">
              <i>搜索</i>
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
export default {
  name: 'Movie',
  components: {
    Header,
    NavBar
  }
}
</script>

<style scoped lang="scss">
  .movie_menu {
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
      .router-link-active {
        color: #e73f3f;
        border-bottom: 2px #e73f3f solid;
      }
    }
  }
</style>