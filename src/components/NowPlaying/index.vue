<template>
  <div class="list" ref="movie_body">
    <Loading v-if="isLoading" />
    <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="update">{{pullDownMsg}}</li>
        <li v-for="item in movieList" :key="item.filmId" @tap="handleToDetail" class="clearfix">
          <div class="pic_show"><img :src="item.poster" alt=""></div>
          <div class="info">
            <h2>{{item.name}}</h2>
            <p>观众评分 <span class="grade">{{item.grade}}</span></p>
            <p>主演: {{item.actors | starFilter}}</p>
            <p>{{item.nation}} | {{item.runtime}}</p>
          </div>
          <div class="btn_buy">
            购票
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
    name: 'NowPlaying',
    data(){
      return {
        movieList: [],
        pullDownMsg: '',
        isLoading: true,
        prevCityId: -1
      }
    },
    methods: {
      handleToDetail(){
        console.log("hello")
      },
      handleToScroll(pos){
        if(pos.y > 30){
          this.pullDownMsg = '正在更新中'
        }
      },
      handleToTouchEnd(pos){
        if(pos.y > 30){
            // axios
            this.pullDownMsg = ''
        }
      }
    },
    activated() {
      let cityId = this.$store.state.city.id
      if(this.prevCityId === cityId){ return; }
      this.isLoading = true

      this.axios({
        url: 'https://m.maizuo.com/gateway?cityId='+cityId+'&pageNum=1&pageSize=10&type=1&k=3946140',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15653786341017907249395"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
          this.movieList = res.data.data.films
          this.isLoading = false
          this.prevCityId = cityId
        })
    }
}
</script>

<style lang="scss" scoped>
  .update {
    height: auto;
    padding: 0;
    margin: 0;
  }
  .list {
    position: absolute;
    width: 100%;
    height: calc(100% - 150px);
    overflow: auto;
  }
  li {
     max-height: 94px;
     padding: 15px;
     position: relative;
    .pic_show img{
      width: 66px;
    }
    .info {
      width: calc(100% - 130px);
      padding: 0 10px;
      h2 {
        font-size: 17px;
        text-overflow: ellipsis;
      }
      p {
        color: #555;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 22px;
      }
      .grade {
        color: #ffc400;
      }
    }
    .btn_buy {
      width: 50px;
      line-height: 25px;
      text-align: center;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(0, -50%);
      color: #fff;
      background-color: #e73f3f;
      border-radius: 3px;
      
    }
  }
  li>div {
    float: left;
  }
  
</style>>
