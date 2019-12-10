export default{
    namespaced:true,
    state: {
        user: {
        }
    },
    mutations: {
        save(state,payload){
            state.user=payload
        }
    }
}