<template>
  <div><h2>个人收藏</h2>
    <ul><li v-for="(item,i) in list" :key="i">
       <span @click="get(item.id)"> {{i+1}}.{{item.t}}</span>
      <span @click="remove(item.id)">【删除】</span>
        </li></ul>
  </div>
</template>

<script>
export default {
name:'shou',
data(){
    return{
        list:[]
    }

},
methods:{
     get(id){
       this.$router.push({
         name:'moviedetail',
         query:{
           id:id
         }
       })
     },
     remove(id){
       let u=localStorage.getItem('token')
        this.list=JSON.parse(localStorage.getItem(u+'ff'))
        console.log(this.list)
        this.list.forEach((item,index,)=>{
          //console.log(item,index)
          if(item.id==id){
            console.log(index)
            this.list.splice(index,1)
            localStorage.setItem(u+'ff',JSON.stringify(this.list))
          }
        })


        // this.list.findIndex(item=>{
        //   console.log(item.id==id)
        // })
     
     }
},
created(){
    let u=localStorage.getItem('token')
        if(localStorage.getItem(u+'ff')){
           this.list=JSON.parse(localStorage.getItem(u+'ff'))
         console.log(this.list)
        }
        
      
       
}

}
</script>

<style>

</style>