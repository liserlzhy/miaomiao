<template>
  <div class="list">
    <Loading v-if="isLoading" />
    <Scroller v-else>
      <ul>
        <li v-for="item in movieList" :key="item.filmId" class="clearfix">
          <div class="pic_show"><img :src="item.poster" alt=""></div>
          <div class="info">
            <h2>{{item.name}}</h2>
            <p>主演: {{item.actors | starFilter}}</p>
            <p>上映日期: {{item.premiereAt | timeFilter(item.timeType)}}</p>
          </div>
          <div v-if="item.isPresale" class="btn_buy">
            预购
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data(){
      return {
        movieList: [],
        isLoading: true,
        prevCityId : -1
      }
    },
    activated() {
      let cityId = this.$store.state.city.id
      if(this.prevCityId === cityId) { return; }
      this.isLoading = true
      this.axios({
        url: 'https://m.maizuo.com/gateway?cityId='+cityId+'&pageNum=1&pageSize=10&type=2&k=9540006',
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
  .list {
    position: absolute;
    width: 100%;
    height: calc(100% - 150px);
    overflow: auto;
  }
  ul {
    padding-bottom: 20px;
  }
  li {
     height: 94px;
     margin: 15px;
     position: relative;
    .pic_show{
      width: 66px;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
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
      right: 0;
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
