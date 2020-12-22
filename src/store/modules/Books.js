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
            state.count = payload.books.count
            state.next = payload.books.next
            state.previous = payload.books.previous
            state.results = payload.books.results
            state.isDone = false
        }

    },
    // Called from components to commit a mutation (like api call)
    actions: {
        async getBook({commit}){
            const book = await fetch(`${process.env.VUE_APP_API_URL}/books`)
            const json = await book.json();
            console.log(json);
            commit('setBook', {
                books: json
            })

        }
    },
    getters:{
        getBooks(state, payload){
            return state.BooksList.filter(book => payload.q in book.title) ?? state.BooksList
        }
    },
  }