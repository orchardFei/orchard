<template>
  <div>
      <h2>插槽</h2>
      <div>{{wewe}}</div>
      <slot name='ss'></slot>
       <slot name='ff'></slot>
  </div>
</template>

<script>
 
export default {
    name:'wewe',
    data(){
        return{

        }
    },
    props:{
        wewe:String
    }
}
</script>

<style>

</style>