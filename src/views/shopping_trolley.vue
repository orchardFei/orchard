<template>
  <div>
      <h2 style="font-size:30px; text-align:center">购物车{{productAmount}}</h2>
      <div>
    <el-row>
  <el-col :span="8" v-for="(o,i) in list" :key="i" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>{{o.product?o.product.name:'没有'}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">购买</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions} from "vuex";
export default {
name:'shopping',
data(){
    return{
     list:{},
     currentDate: new Date()
    }
    
},
methods:{
...mapActions('catr',['save'])
},
computed:{
...mapGetters('catr',['productAmount'])
}
,
created(){
    this.save()
    var _this=this
    axios.get('http://localhost:3000/api/v1/shop_carts',{
        headers:{
            authorization:`Bearer ${localStorage.getItem('tokenl')}`
        }
    }).then(res=>{console.log(res),
                _this.list=res.data
                 })
               .catch(err=>console.log(err))
}


}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>