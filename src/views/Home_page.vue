<template>
  <div>
      <h2>{{ age }}</h2>
      <div class="font">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/movie">movie</router-link>|
      <router-link :to='{name:"login"}'>登陆</router-link>
      <router-link :to='{name:"show"}'>VUEX</router-link>
       <router-link :to='{name:"shangping"}'>商品</router-link>
       <div style="border: 2px solid red">
       <router-link :to='{name:"vuexLogin"}'>VUEX登陆</router-link>
       <router-link :to='{name:"register"}'>VUEX注册</router-link>
       <router-link :to='{name:"shoppingTrolley"}'>VUEX购物车</router-link>
       <router-link :to='{name:"shovuex"}'>copy购物车</router-link>
       </div>
      </div>
        <Home></Home>
        <meto wewe="小龙人">
          <template v-slot:ss>
            <p>龙在天概念</p>
          </template>
          <template #ff>
            <h1>movid</h1>
          </template>
        </meto>
  </div>
</template>

<script>
import Home from './Home'
import Slot from './slot'
export default {
   name:'home_page',
   data () {
     return{
         age:'me is 主页'
     }
   },
    components: {
    Home,
    meto:Slot
  }
}
</script>

<style scoped>
.font{
font-size:30px
}

</style>