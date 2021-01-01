export default {
    // namespaced: true,
    state: {
        count: 0,
        next: '',
        previous: '',
        results: [],
        isDone: true
    },
    // Mutat the state (Update state)
    mutations: {
        setBook(state, payload){
            state.count = payload.data.count
            state.next = payload.data.next
            state.previous = payload.data.previous
            state.results = payload.data.results
            state.isDone = false
        }

    },
    // Called from components to commit a mutation (like api call)
    actions: {
        getBook({commit}){
            fetch(`${process.env.VUE_APP_API_URL}/books`)
            .then(res => res.json())
            .then(data => commit('setBook', {data}))
        }
    },
    getters:{
        getBooks(state){
            return state
        }
    },
  }