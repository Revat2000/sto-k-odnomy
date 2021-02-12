
export default {
  state: {
    firstTeamScore: 0,
    secondTeamScore: 0,
    errorFTeamArr: [],
    errorSTeamArr: [],
   
  },
  mutations: {
    MUTATE_F_TEAM_SCORE(state, payload){
      state.firstTeamScore = payload
    },
    MUTATE_S_TEAM_SCORE(state, payload){
      state.secondTeamScore = payload
    },
    SET_TEAMF_ERROR_ARR(state, payload){
      state.errorFTeamArr = payload
    },
    SET_TEAMS_ERROR_ARR(state, payload){
      state.errorSTeamArr = payload
    },
    CLEAR_TEAM_ERROR(state, payload){
      if (payload == 'first'){
        state.errorFTeamArr = []
      } else if (payload == 'second'){
        state.errorSTeamArr == []
      }
    },
  },

  actions: {
    // распределение очков раунда выбранной команде
    POINTS_DISTRIBUT({commit, getters}, payload) {
      const totalScore = getters.getTotalRoundPoint;
     
      if (payload == 'first') {
        let teamFScore = getters.getFirstTeamScore;
        teamFScore = teamFScore + totalScore;
        commit('MUTATE_F_TEAM_SCORE', teamFScore);
      } else if (payload == 'second') {
        let teamSScore = getters.getSecondTeamScore;
        teamSScore = teamSScore + totalScore;
        commit('MUTATE_S_TEAM_SCORE', teamSScore);
      }
      // console.log('teamFScore => ' + getters.getFirstTeamScore);
      // console.log('teamSScore => ' + getters.getSecondTeamScore);
    },

    // массив ошибок команды 1
    FIRST_TEAM_ERROR({commit}, payload) {
      commit('SET_TEAMF_ERROR_ARR', payload);
    },

    // массив ошибок команды 2
    SECOND_TEAM_ERROR({commit}, payload) {
      commit('SET_TEAMS_ERROR_ARR', payload);
    },

    // очистка массива ошибок команды
    CLEAR_TEAM_ERROR({commit}, payload) {
      commit('CLEAR_TEAM_ERROR', payload);
    },

    //  // очистка массива ошибок команды 2
    //  CLEAR_SECOND_TEAM_ERROR({commit}, payload) {
    //   commit('CLEAR_TEAM_ERROR', payload);
    // },


  },

  getters: {
    getFirstTeamScore: (state) => state.firstTeamScore,
    getSecondTeamScore: (state) => state.secondTeamScore,
    getFirstTeamErrArr: (state) => state.errorFTeamArr,
    getSecondTeamErrArr: (state) => state.errorSTeamArr,
  }
}