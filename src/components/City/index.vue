<template>
  <div class="city-list">
    <div class="hotCity">
      <span>热门城市</span>
      <ul class="clearfix">
        <li v-for="(item,index) in hotList" :key="index" >{{item.name}}</li>
      </ul>
    </div>
    <div class="sort" ref="letter">
      <div v-for="(sortCity,index) in cityList" :key="index" >
        <h2>{{sortCity.index}}</h2>
        <ul v-for="city in sortCity.list" :key="city.cityId">
          <li>{{city.name}}</li>
        </ul>
      </div>
    </div>
    <div class="city-index">
      <ul>
        <li v-for="(cindex,index) in cityList" :key="cindex.index" @touchstart="handleSortCity(index)">{{cindex.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { format } from 'path';
export default {
    name: 'City',
    data(){
      return {
        cityList: [],
        hotList: []
      }
    },
    mounted(){
      this.axios({
        url: 'https://m.maizuo.com/gateway?k=9271004',
        headers: {
         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15653786341017907249395"}',
         'X-Host': 'mall.film-ticket.city.list',
        }
      }).then(res => {
        let {cityList,hotList} = this.formatCity(res.data.data.cities)
        this.cityList = cityList
        this.hotList = hotList
      })
    },
    methods: {
      formatCity(cities){
        let cityList = []
        let hotList = []
        
        for(let i=0; i<cities.length; i++){
          if(cities[i].isHot){
            hotList.push(cities[i])
          }

          let firstLetter = cities[i].pinyin.substring(0,1).toUpperCase()

          if(toCom(firstLetter)){
            cityList.push({
              index: firstLetter,
              list: [cities[i]]
            })
          }else{
            for(let j=0; j<cityList.length; j++){
              if(cityList[j].index == firstLetter){
                cityList[j].list.push(cities[i])
                break;
              }
            }
          }
        }

        function toCom(firstLetter){
          for(let i=0; i<cityList.length; i++){
            if(cityList[i].index == firstLetter){
              return false;
            }
          }
          return true;
        }

        cityList.sort((a,b) => {
          if(a.index > b.index){
            return 1;
          }else if(a.index < b.index){
            return -1;
          }else{
            return 0;
          }
        })
        return {
          cityList,
          hotList
        }
      },
      handleSortCity(index){
        let h2 = this.$refs.letter.getElementsByTagName('h2')
        this.$refs.letter.parentNode.scrollTop = h2[index].offsetTop
        console.log(this.$refs.letter.parentNode.scrollTop)
      }
    }
}
</script>

<style lang="scss" scoped>
  .city-list {
    position: absolute;
    width: 100%;
    height:  calc(100% - 150px);
    overflow: auto;
  }
  .hotCity {
    margin: 10px;
    span{
      color: #666;
      font-size: 13px;
    }
    ul {
      margin: 10px 10px 10px 20px;
      li {
        float: left;
        padding: 5px 33px;
        margin: 5px 10px 5px 0;
        background-color: #eee;
        border-radius: 5px;
      }
    }
  }
  .sort {
    margin-right: 15px;
    h2 {
      background-color: #eee;
      font-size: 13px;
      font-weight: normal;
      padding: 5px 10px;
    }
    ul li{
      padding: 10px 15px;
    }
  }
  .city-index {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    font-size: 10px;
    ul li{
      margin-bottom: 5px;
    }
  }
</style>>