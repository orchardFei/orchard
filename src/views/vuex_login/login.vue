<template>
  <div>
      <h2>登陆页面</h2>
      <p></p>
      <input type="text" v-model="userName" placeholder="请输入用户名"><br/>
      <input type="password" v-model="password"  placeholder="请输入密码"><br/>
      <button @click="btn">登陆</button>
  </div>
</template>

<script>
//import { mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
    name:'login',
    data(){
        return{
            password:'',
            userName:''
        }
    },
    
    methods:{
        btn(){
            axios.post('http://localhost:3000/api/v1/auth/login',{
                userName:this.userName,
                password:this.password
            }).then(res=>{
                if(res.data.code=='success'){
                    localStorage.setItem('tokenl',res.data.token)
                    this.$router.push({
                        name:'shangping'
                    })
                }
            })
           
        },
       // ...mapMutations('user',['save'])
    },
    // computed:{
    //     ...mapState('user',['user'])
    // }
    
}
</script>

<style>

</style>