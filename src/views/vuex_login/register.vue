<template>
  <div>
    <h2 style="font-size:2rem">注册</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item label="昵称">
        <el-input v-model="form.nickName"></el-input>
      </el-form-item>

      <el-form-item label="头像">
        <img ref="ss" class="img" src="http://cdn.duitang.com/uploads/item/201512/16/20151216205356_M2UaS.jpeg" alt />
      </el-form-item>

      <el-form-item>
    <el-button type="primary" @click="onSubmit">注册</el-button>
    <el-button>取消</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      form: {
        userName: "",
        password: "",
        nickName: "",
      }
    };
  },
  methods: {
    onSubmit() {
      axios.post("http://localhost:3000/api/v1/auth/reg",{
              userName:this.form.userName,
              password:this.form.password,
              nickName:this.form.nickName,
              avatar:this.$refs.ss.src+""
          
      }).then(res=>{
          console.log(res)
      })
    }
  }
};
</script>
<style scoped>
.img {
  width: 100px;
  height: 100px;
  display: block;
}
</style>