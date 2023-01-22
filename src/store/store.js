import { createStore } from 'vuex'
import axios from "axios";
const store = createStore({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_TO_VUEX(state, users){
      state.users = users
    }
  },
  actions: {
    async GET_USERS_FORM_API({commit}) {
      let response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      commit("SET_USERS_TO_VUEX", response.data)
    }
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  },
})
export default store