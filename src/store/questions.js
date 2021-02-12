// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

export default {
    state: {
      questions: [
        {
          number: 0,
          text: 'КАКОЙ ДОЛЖНА БЫТЬ ХОРОШАЯ МЕДСЕСТРА?',
          name: 'ПРОСТАЯ ИГРА',
          answeres: [
            {
              textAnswer: 'доброжелательная/добрая',
              points: 25,
              numAnswer: 1
            },
            {
              textAnswer: 'ответственная',
              points: 16,
              numAnswer: 2
            },
            {
              textAnswer: 'милосердная / сострадающая',
              points: 12,
              numAnswer: 3
            },
            {
              textAnswer: 'отзывчивая / понимающая',
              points: 11,
              numAnswer: 4
            },
            {
              textAnswer: 'профессионал',
              points: 10,
              numAnswer: 5
            },
            {
              textAnswer: 'внимательная',
              points: 5,
              numAnswer: 6
            }
          ]
        },
        {
          number: 1,
          text: 'НАЗОВИТЕ САМОГО ПОПУЛЯРНОГО У НАСЕЛЕНИЯ ВРАЧА – УЗКОГО СПЕЦИАЛИСТА?',
          name: 'ДВОЙНАЯ ИГРА',
          answeres: [
            {
              textAnswer: 'Кардиолог',
              points: 28,
              numAnswer: 1
            },
            {
              textAnswer: 'Оториноларинголог / ЛОР ',
              points: 26,
              numAnswer: 2
            },
            {
              textAnswer: 'Хирург',
              points: 24,
              numAnswer: 3
            },
            {
              textAnswer: 'Терапевт',
              points: 20,
              numAnswer: 4
            },
            {
              textAnswer: 'Офтальмолог / Окулист',
              points: 18,
              numAnswer: 5
            },
            {
              textAnswer: 'Эндокринолог',
              points: 14,
              numAnswer: 6
            }
          ]
        },
        {
          number: 2,
          text: 'ЧТО ДЕЛАЮТ В ПРОЦЕДУРНОМ КАБИНЕТЕ?',
          name: 'ТРОЙНАЯ ИГРА',
          answeres: [
            {
              textAnswer: 'процедуры',
              points: 150,
              numAnswer: 1
            },
            {
              textAnswer: 'уколы/инъекции',
              points: 88,
              numAnswer: 2
            },
            {
              textAnswer: 'забор крови на анализ',
              points: 27,
              numAnswer: 3
            },
            {
              textAnswer: 'прививки',
              points: 9,
              numAnswer: 4
            },
            {
              textAnswer: 'работают',
              points: 6,
              numAnswer: 5
            },
            {
              textAnswer: 'чай пьют',
              points: 3,
              numAnswer: 6
            }
          ]
        },
        {
          number: 3,
          text: 'НАЗОВИТЕ САМЫЙ ИЗВЕСТНЫЙ ФИЛЬМ / СЕРИАЛ О МЕДИЦИНСКИХ РАБОТНИКАХ?',
          name: 'ИГРА НАОБОРОТ',
          answeres: [
            {
              textAnswer: 'Интерны',
              points: 15,
              numAnswer: 1
            },
            {
              textAnswer: 'Доктор Хаус',
              points: 25,
              numAnswer: 2
            },
            {
              textAnswer: 'Скорая помощь',
              points: 40,
              numAnswer: 3
            },
            {
              textAnswer: 'Склифосовский',
              points: 70,
              numAnswer: 4
            },
            {
              textAnswer: 'Женский доктор',
              points: 85,
              numAnswer: 5
            },
            {
              textAnswer: 'Знахарь',
              points: 99,
              numAnswer: 6
            }
          ]
        },
        // {
        //   number: 4,
        //   text: 'Text of the Супер-игра question...',
        //   name: 'Супер игра!',
        //   answeres: [
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-1 text',
        //       points: 38,
        //       numAnswer: 1
        //     },
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-2 text',
        //       points: 24,
        //       numAnswer: 2
        //     },
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-3 text',
        //       points: 15,
        //       numAnswer: 3
        //     },
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-4 text',
        //       points: 10,
        //       numAnswer: 4
        //     },
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-5 text',
        //       points: 9,
        //       numAnswer: 5
        //     },
        //     {
        //       textAnswer: 'Супер игра! QU-1 answ-6 text',
        //       points: 3,
        //       numAnswer: 6
        //     }
        //   ]
        // }
      ],
      questNumber: 0,
      curAnsweres: [],
      curQuestion: '',
      curRoundName: '',
      totalRoundPoint: 0,
      nextRound: false,

    },
    mutations: {
      QUEST_NUMBER(state, payload){
        state.questNumber = payload
      },
      CURRENT_ANSWERES(state, payload){
        state.curAnsweres = payload
      },
      CURRENT_QUEST(state, payload) {
        state.curQuestion = payload
      },
      CURRENT_ROUND_POINTS(state, payload) {
        state.totalRoundPoint = payload
      },
      ZERRO_CURRENT_ROUND_POINTS(state){
        state.totalRoundPoint = 0
      },
      CHECK_NEXT_ROUND(state, payload){
        state.nextRound = payload
      },
      CURRENT_ROUND_NAME(state, payload) {
        state.curRoundName = payload
      },
    },
    actions: {

      // установить номер текущего вопроса
      SET_QUEST_NUMBER({commit, getters}, payload) {
        let curQuestNum = getters.getQuestNum
        if (payload && curQuestNum != null && curQuestNum < 3 && curQuestNum >= 0) {
          curQuestNum = curQuestNum + 1
        } else if (!payload && curQuestNum != null && curQuestNum < 3 && curQuestNum > 0) {
          curQuestNum = curQuestNum - 1
        } else {
          curQuestNum = 0
        }
        commit('QUEST_NUMBER', curQuestNum)
      },

      // Загрузит массив ответов и очков для текущего вопроса
      LOAD_QUESTION({commit, getters}) {
        let curQuestNum = getters.getQuestNum;
        let questArr = getters.getQuest;  // массив всех вопросов
        let curQuestArr = []; // массив текущего вопроса
        let answeresArr = []; // массив ответов и очков для текущего вопроса
        let questionText = ''; // текст текущего вопроса
        let roundName = ''; // нгазвание текущего раунда
        Object.keys(questArr).forEach(key => {
          if (curQuestNum == questArr[key].number) {
            curQuestArr = questArr[key];
            questionText = questArr[key].text;
            roundName = questArr[key].name;
            Object.keys(curQuestArr).forEach(key => {
              answeresArr = curQuestArr[key]
            })

          }
        });
        commit('CURRENT_ROUND_NAME', roundName);
        commit('CURRENT_QUEST', questionText);
        commit('CURRENT_ANSWERES', answeresArr)
        // console.log(answeresArr); 
      }, 

      // Подсчет общего счета раунда
      CUR_ROUND_POINTS({commit, getters}, payload) {
        let newRoundPoint = getters.getTotalRoundPoint + payload
        commit('CURRENT_ROUND_POINTS', newRoundPoint)
      },

      // Обнуление очков раунда после распределения командам
      ZERRO_CUR_ROUND_POINTS({commit}) {
        commit('ZERRO_CURRENT_ROUND_POINTS')
        // console.log('getTotalRoundPoint => ' + getters.getTotalRoundPoint);
      },

      // Проверка начала следующего раунда
      IS_NEXT_ROUND_START({commit}, payload) {
        commit('CHECK_NEXT_ROUND', payload)
      },
      
    },
    getters: {
      getQuestNum: (state) => state.questNumber,
      getQuest: (state) => state.questions,
      getAnsweres: (state) => state.curAnsweres,
      getQuestText: (state) => state.curQuestion,
      getTotalRoundPoint: (state) => state.totalRoundPoint,
      getNextRound: (state) => state.nextRound,
      getRoundName: (state) => state.curRoundName
    }
  }
  