<template>
  <div>
      <h2 style="font-size:30px; text-align:center">购物车VUEX【{{productAmount}}】</h2>
      <ul>
          <li v-for="(item,i) in list" :key="i">
              {{item.product?item.product.name:'没有'}}
          </li>
      </ul>
<div>
    
</div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState, mapGetters, mapActions } from "vuex";
export default {
name:'sho_vuex',
data(){
    return{
    
    }
    
},
created(){
this.save()
},
methods:{
...mapActions('catr',['save'])
},
computed:{
...mapState('catr',['list']),    
...mapGetters('catr',['productAmount'])
}


}
</script>

<style>

</style>