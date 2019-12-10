<template>
  <div>
      <div><h2>商品信息</h2><h2 style="font-size:30px; text-align:center">购物车VUEX【{{productAmount}}】</h2></div>
      <div><ul>
           <li v-for="(item,i) in add" :key="item._id">{{++i}}---{{item.name}}<span @click="buy(item._id)">【加入购物车】</span></li>
    </ul></div>
    <button @click="load(page)">下一页</button>
  </div>
</template>

<script>
//import axios from 'axios'
// import { products } from '../services/products';
import { mapState, mapActions, mapGetters } from "vuex";
import Axios from 'axios';
export default {
    name:'shangping',
   data(){
       return {
           list:[]
       }
   },
   created(){
       
       this.save()
       this.load(this.page)
    //    axios.get('http://localhost:3000/api/v1/products').then(res=>{
    //        this.save({
    //         add:res.data.products
    //        })
    //        console.log(res)
           
    //    })
    
   },



   methods:{
       ...mapActions('product',['load']),
       ...mapActions('catr',['save']),

        buy(id){
            Axios.post('http://localhost:3000/api/v1/shop_carts',{
                product:id
            },{
            headers:{
                authorization:`Bearer ${localStorage.getItem('tokenl')}`
            }
            }).then(res=>{console.log(res)
               this.save()
               })
            .catch(err=>console.log(err))
        }
   },
   computed:{
       ...mapState('product',['add','page']),
       ...mapGetters('catr',['productAmount'])
       
   }
   
}
</script>

<style>

</style>