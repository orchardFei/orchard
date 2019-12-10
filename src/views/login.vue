<template>
<div>
 <div class="center">   
<h2 class="font">登陆</h2>
<input type="text" v-model="ipt"><br/>
<input type="password" v-model="password"><br/>
<button @click="set">登陆</button>
</div>
  </div>
</template>

<script>
export default {
   name:'login',
   data(){
       return{
           ipt:'',
           password:''
       }
       
   },
   methods:{
        set(){
            if(this.ipt==''&&this.password==''){
                alert('请输入用户名和密码')
            }else{
             let content = JSON.parse(localStorage.getItem('token'))      
            if(!content){
          localStorage.setItem('token',JSON.stringify(this.ipt))
          this.$router.push({
             name:'home_page' 
          })       
        }else{
            alert('已经登录过了')
        }  
            }
         
              

     }
   }
  
}
</script>

<style scopde>
html,body{
    height: 100%;
}
    .font{
        font-size:30px
    }
    .center{
        height: 500px;
        width: 400px;
        background: burlywood;
        float: left;
        margin: 10%;
    }
</style>