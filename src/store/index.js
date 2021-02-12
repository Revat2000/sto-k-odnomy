import Vue from 'vue'
import Vuex from 'vuex'
import questionModule from '../store/questions'
import teams from '../store/teams'
import biggame from '../store/biggame'

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
  questionModule,
  teams,
  biggame,
 }
})
