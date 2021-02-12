
export default {
  state: {
    totalBigScore: 0,
  },

  mutations: {
    MUTATE_TOTAL_BIG_SCORE(state, payload){
      state.totalBigScore = payload
    }
  },

  actions: {
    SET_TOTAL_BIG_SCORE({commit}, payload){
      commit('MUTATE_TOTAL_BIG_SCORE', payload)
    }
  },

  getters: {
    getTotalBigScore: (state) => state.totalBigScore
  }
  }