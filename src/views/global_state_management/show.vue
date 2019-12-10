<template>
  <div>
    <h2>这里是count的值:【{{this.$store.state.count}}】</h2>
    <ul><li v-for="item in count" :key="item.id">{{item.done}}</li></ul>
    <button @click="add">改变数据+</button>
    <button @click="subtract">改变数据-</button>
    <p>【{{this.$store.getters.getTodoId(6)}}】</p>
    <h5 @click="aa()">安安</h5>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    
    name:'store',
    computed:{
        ...mapGetters(['count',])

    },
    methods:{
        add(){
            this.$store.commit('add',{
                amount:4
            })
        },
        subtract(){
             this.$store.commit('subtract',{
                amount:3
            })
        },
        aa(){
            this.$store.dispatch('increment',{
             amount:10
           })
        }
    }
}
</script>

<style>

</style>