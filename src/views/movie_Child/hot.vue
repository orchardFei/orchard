<template>
<div>
  <ul>
    <li v-for="(item,i) in movies" :key="item.id" >
      <span @click="get(item.id)">
      <span>{{i+1}}.</span>
      {{item.t}}
       
      </span><a @click="collection(item)">【收藏】</a>
    </li>
   
    </ul>
  </div>

</template>

<script>
import axios from "axios";
export default {
   name:'hot',
   data(){
     return{
        movies:[],
     };
    
    },
    created(){
      axios
      .post('http://localhost:3000/api/v1/proxy',{
        url:
        `https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290`
      }).then(res=>{
        console.log(res)
        this.movies=res.data.ms
      })
   },
   methods:{
     get(id){
       this.$router.push({
         name:'moviedetail',
         query:{
           id:id
         }
       })
     },
     collection(m){
       if(localStorage.getItem('token')){
          let u=localStorage.getItem('token')
       let list=[]
       if(localStorage.getItem(u+'ff')){
         list=JSON.parse(localStorage.getItem(u+'ff'))
       }
       if(list.findIndex(item=>item.id==m.id)==-1){
         list.push(m)
         localStorage.setItem(u+'ff',JSON.stringify(list))
         alert('添加成功')
       }else{
         alert('已经添加')
       }
       }else{
         alert('请先登陆')
         this.$router.push({
           name:'login'
         })
       }
      
       
     }
   }
}
</script>

<style>

</style>