<template>
  <div>
    <h2 class="h2">个人中心</h2>
    <router-link :to="{name:'shou'}">收藏</router-link>
  </div>
</template>
<script>
export default {
  name:'personalCenter',
  created(){
  }

}
</script>

<style lang="scss" scoped>
.h2{
   font-size: 30px;
}
</style>