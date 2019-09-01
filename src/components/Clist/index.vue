<template>
  <div>
    <ul class="cinemaList">
      <li v-for="item in cinemaList" :key="item.cinemaId" class="clearfix">
        <div class="left">
          <h2>{{item.name}}</h2>
          <p>{{item.address}}</p>
        </div>
        <div class="right">
          <div class="price">
            <span class="yuan">¥&nbsp;</span>
            <span class="num">{{item.lowPrice/100}}</span>
            <span class="upon">&nbsp;起</span>
          </div>
          <span class="distance">距离未知</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Clist',
    data() {
      return {
        cinemaList: []
      }
    },
    mounted(){
      this.axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=1919434',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15653786341017907249395"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        this.cinemaList = res.data.data.cinemas
      })
    }
}
</script>

<style lang="scss" scoped>
  .cinemaList {
    position: absolute;
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
  }
  .cinemaList li{
    
    padding: 15px;
    .left {
      width: calc(100% - 85px);
      float: left;
      padding-right: 15px;
      h2,p{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      h2 {
        color: #191a1b;
        font-size: 15px;
      }
      p {
        color: #797d82;
        font-size: 12px;
      }
    }
    .right {
      float: right;
      text-align: center;
      .price {
        color: #ff5f16;
        .yuan {
          font-size: 11px;
        }
        .upon {
          font-size: 10px;
        }
        .num {
          font-size: 15px;
        }
      }
      .distance {
        color: #797d82;
        font-size: 12px;
      }
    }
  }
</style>>