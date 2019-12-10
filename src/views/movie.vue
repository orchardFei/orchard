<template>
<div>
    <div class="font">
    <span @click="currentComponent='hot'">热门</span> |
    <span @click="currentComponent='good'">好评</span> |
    <span @click="currentComponent='adout'">关于</span>|
     <span @click="personalCenter">个人中心</span>|
     <span @click="exit">退出登陆</span>
     </div>
    <hr/>
   <keep-alive>
       <component :is="currentComponent"></component>
   </keep-alive>
  </div>
</template>
<script>
import  axios from "axios";
import qs from 'qs'
import hot from "./movie_Child/hot";
import good from "./movie_Child/good";
import adout from "./movie_Child/adout";
export default {
    name:'film',
    data () {
     return{
        currentComponent:'hot'
    }
    },
    methods:{
       getData(){
       },
       personalCenter(){
           this.$router.push({
               name:'personalCenter'
           })
       },
       exit(){
           let u=localStorage.getItem('token')
           if(localStorage.getItem('token')){
           localStorage.removeItem('token')
               alert('已退出登陆')
           }else{
               alert('还没有登陆！亲')
           }
       }
    },
    components:{
        hot,
        good,
        adout
    },
    created(){
        
    }
}
</script>



<style scoped>
.font{
    font-size: 30px;
}

</style>
  