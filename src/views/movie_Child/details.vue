<template>
  <div>
      <h2>影片详情</h2>
      <p><b>电影名:</b><span>{{MD.name}}</span></p>
      <img  class="img" :src=MD.img alt="ww" /> 
      <!-- <video v-if="isShow" :poster=hightUrl  class="img" alt="zz"></video> -->
      <p><b>内容简介:</b>{{MD.story}}</p>
  </div>
</template>

<script>
import  axios  from "axios";
export default {
    name:'movieDetails',
    data(){
      return{
        movie:'',
        MD:'',
        isShow:false,
        Vds:[],
        hightUrl:''

      }
    },
    created(){
      this.movie=this.$route.query
      console.log(this.movie.id)
      axios.post('http://localhost:3000/api/v1/proxy',{
        url:`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${this.movie.id}`
      }).then(res=>{this.MD=res.data.data.basic
         console.log(this.MD)
      })
    },
    methods:{
      // Vd(id){
      //   this.isShow = !this.isShow;
      //   axios.post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{
      //   url:`https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=${id}`
      // }).then(res=>{
      //   console.log(res)
      //    this.Vds=res.data.videoList
      //    console.log(this.Vds[0].hightUrl)
      //    this.hightUrl=this.Vds[0].hightUrl
      // })
      // }
    }
}
</script>

<style  scoped>
.img{
  width: 300px;
  border: 1px solid #000
}
</style>>

