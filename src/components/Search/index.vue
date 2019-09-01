<template>
  <div>
      <div class="search-box">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" v-model="message">
        </div>
      </div>
      <div v-if="movieList.length" class="list">
        <p class="list-title">电影/电视剧/综艺</p>
        <ul>
          <li v-for="item in movieList" :key="item.id" class="clearfix">
            <div class="pic_show"><img :src="item.img | imageFilter('128.180')" alt=""></div>
            <div class="info">
              <h2>{{item.nm}}</h2>
              <p>观众评分 <span class="grade">{{item.sc}}</span></p>
              <p>主演: {{item.star}}</p>
              <p>{{item.fra}} | {{item.dur}}</p>
            </div>
            <!-- <div class="btn_buy">
              购票
            </div> -->
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
      return {
        message: '',
        movieList: []
      }
    },
    methods: {
      cancelRequest(){
        if(typeof this.source === 'function'){
          this.source('终止请求')
        }
      }
    },
    watch: {
      message(val){
        let that = this
        let reg = /^\s*$/
        if(reg.test(val)){
          this.movieList = []
        }else{
          this.cancelRequest()
          this.axios.get('/ajax/search?kw='+val+ '&cityId=1&stype=-1',{
            cancelToken: new this.axios.CancelToken(function(c){
              that.source = c
            })
          }).then(res => {
            let movies = res.data.movies.list
            if(movies.length !=0){
              this.movieList = movies
            }
          }).catch(err => {
            if(this.axios.isCancel(err)){
              console.log('Rquest canceled',err.message) // 请求如果被取消，返回取消的message
            }else {
              // handle error
              console.log(err)
            }
          })
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .search-box {
    background-color: #eee;
    padding: 8px;
    .search {
      background-color: #fff;
      .icon-sousuo {
        padding: 0 5px;
      }
      input {
        width: calc(100% - 40px);
        border: none;
        padding: 5px;
        outline: none;
      }
    }
  }
  .list {
    position: absolute;
    width: 100%;
    height: calc(100% - 150px);
    overflow: auto;
    padding-bottom: 70px;
    p.list-title {
      color: #888;
      line-height: 40px;
      padding-left: 10px;
      border-bottom:1px #eee solid;
    }
  }
  li {
     max-height: 94px;
     margin: 15px;
     position: relative;
    .pic_show img{
      width: 66px;
    }
    .info {
      width: calc(100% - 130px);
      padding: 0 10px;
      h2 {
        font-size: 17px;
        overflow: hidden;
        white-space: nowrap;
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
