import Axios from "axios"

export default{
    namespaced:true,
    state: {
        list:[]
    },
    mutations: {
        load(state,payload){
            state.list=payload.list
        }
    },
    actions:{
        async save({commit},payload){
            console.log(payload)
            const res=await Axios.get('http://localhost:3000/api/v1/shop_carts',{
            headers:{
                authorization:`Bearer ${localStorage.getItem('tokenl')}`
            }
        })
        commit('load',{
            list:res.data
        })
         
        }
    },
    getters:{
        productAmount(state){
            let sum=0;
            state.list.forEach(element => {
                sum += element.quantity
               
            });
            return sum
        }
    }
}