import Vue from 'vue'
import Vuex from 'vuex';
import user from './user.js'
import product from './product.js'
import catr from './catr.js'


Vue.use(Vuex)


const state = {
  count:1,
  datas:[{id:1,done:1}
         ,{id:2,done:2}
         ,{id:3,done:3}
         ,{id:4,done:4}
         ,{id:5,done:5}
         ,{id:6,done:6}
         ,{id:7,done:7}
        ]
}

const getters ={
  count: datas=>{
    return state.datas.filter(datas=>datas.done>3)
  },
  getTodoId:(state)=>(id)=>{
    return state.datas.find(item=>item.id===id)
  }
}

const mutations ={
    add(state,payload){
      state.count+=payload.amount
    },
    subtract(state,payload){
      state.count -= payload.amount
    }
}

const actions ={
    increment(context,payload){
      setTimeout(()=>{
        context.commit('subtract',payload)
      },300)
    }
}
const modules ={
    user,
    product,
    catr
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})



















































































// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state ={
//   count : 2
// }
// const getters = {
//   count : state =>state.count
// }
// const mutations = {
//     increment: state => state.count++,
//     decrement: state => state.count--
// }
// const actions = {
//   increment : ({ commit }) => commit('increment'),
//   decrement : ({ commit }) => commit('decrement')
// }
// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })