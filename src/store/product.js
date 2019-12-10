import axios from "axios"

export default{
    namespaced:true,
    state:{
        query:{},
        add:[],
        page:1
    },
    mutations:{
        save(state,play){
            state.add=play.add;
            state.page += 1
        }
    },
    actions:{
      async load({commit},paly){
            console.log(paly)
         const res = await axios.get('http://localhost:3000/api/v1/products',{
            params:{
                page:paly
            }
         })
                commit('save',{
                    add:res.data.products
                })
        }
    }
}