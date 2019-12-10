<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{this.$store.state.count}}</h2>
    <span >{{call}}</span>
    <input type="text" v-model="call"/>
    <input type="button" v-model="call"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      call:'这一段文字'
    }
    
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="stylus">

</style>
