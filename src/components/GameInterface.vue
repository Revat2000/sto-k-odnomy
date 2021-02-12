<template>
  <v-main
  style="padding-top: 50px; height: 95vh; background-image: url('https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/main.jpeg?alt=media&token=fd3485f5-7320-4f00-80d1-484e93398d13');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top; ">
   <!-- <v-main
    class="secondary"
    style="padding-top: 50px; height: 95vh;  "> -->
  
    <v-alert v-if="alertPointDistr" dense border="left" type="warning">
      Распределите очки текущего раунда
    </v-alert>

    <v-container class="px-1 ">
      <v-row>
        <v-col cols="2" xs12 sm12  >
          <v-sheet rounded="lg" min-height="268"  >
            <team-first class="px-0 mx-0"></team-first>
          </v-sheet>

          <v-sheet rounded="lg" min-height="50" class="mt-5">
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-btn width="100%" height="auto" @click="setPrevQuest"
                    :color="curRoundName == 'ПРОСТАЯ ИГРА' ? 'green' : '' 
                        || curRoundName == 'ДВОЙНАЯ ИГРА' ? 'blue' : '' 
                        || curRoundName == 'ТРОЙНАЯ ИГРА' ? 'red' : '' 
                        || curRoundName == 'ИГРА НАОБОРОТ' ? 'purple' : ''"
                    elevation="10"
                  >
                    <v-icon size="50" color="white">mdi-chevron-double-left</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-flex>
          </v-sheet>
        </v-col>
<!-- :color="`${this.cheepsColor}`" -->
        <v-col cols="8" xs12 sm12>
          <v-sheet min-height="70vh" rounded="lg">
            <v-container fluid>
              <v-col cols="12" md="12" >
                <v-row align="center" justify="space-around" class="mb-5">
                   <v-chip
                    class="ma-2"
                    :color="curRoundName == 'ПРОСТАЯ ИГРА' ? 'green' : '' 
                          || curRoundName == 'ДВОЙНАЯ ИГРА' ? 'blue' : '' 
                          || curRoundName == 'ТРОЙНАЯ ИГРА' ? 'red' : '' 
                          || curRoundName == 'ИГРА НАОБОРОТ' ? 'purple' : ''"
                    text-color="white"
                    large
                  >
                    <v-icon left>
                      mdi-star
                    </v-icon>{{ curRoundName }} 
                    <v-icon right>
                      mdi-star
                    </v-icon>                     
                  </v-chip>
                  <!-- <v-label class="text-h4">{{ curRoundName }}</v-label> -->
                  <v-avatar color="orange" size="62" rounded>
                    <span class="white--text headline">{{ roundScore }}</span>
                  </v-avatar>
                   <v-chip
                    class="ma-2"
                    :color="curRoundName == 'ПРОСТАЯ ИГРА' ? 'green' : '' 
                          || curRoundName == 'ДВОЙНАЯ ИГРА' ? 'blue' : '' 
                          || curRoundName == 'ТРОЙНАЯ ИГРА' ? 'red' : '' 
                          || curRoundName == 'ИГРА НАОБОРОТ' ? 'purple' : ''"
                    text-color="white"
                    large
                  >
                   <v-icon left>
                      mdi-star
                    </v-icon>{{ curRoundName }} 
                    <v-icon right>
                      mdi-star
                    </v-icon>                   
                  </v-chip>
                </v-row>
                <!-- color="lime accent-2" -->
                <!-- color="yellow lighten-1" -->
                <v-card 
                  max-width="auto" 
                  class="d-flex justify-center" 
                  dark border="right"
                  color="yellow accent-2"
                  
                >
                  <v-card-title 
                    style="min-height: 70px; text-align: center; color: black; font-size: 1.85em;"
                    class="font-weight-bold "
                    v-text="currentQuest"
                    id="questionText"
                  ></v-card-title>
                </v-card>
              </v-col>
            </v-container>
            
            <!-- <question-block> -->
            <v-item-group multiple dark v-model="toggle_exclusive">
              <v-container class="px-0 pb-2 pt-1">
                <v-col
                  v-for="answer in questionAnswere"
                  :key="answer.numAnswer"
                  cols="12"
                  class="px-5 pt-1 "
                >
                  <!-- @click="collectPoints(answer.points)" -->
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? 'grey darken-4 ' : ''"
                      class="d-flex align-left"
                      dark
                      height="3.5em"
                      width="100%"
                      @click="toggle"
                      @mouseup="collectPoints(answer.points)"
                    >
                      <span  class="mt-4 ml-4">{{answer.numAnswer}}</span>

                      <v-scroll-y-transition>
                        <div
                          v-if="active"
                          class="text-h4 flex-grow-1 text-center mt-2"
                        >
                          {{ answer.textAnswer }} - {{ answer.points }}
                        </div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-col>
              </v-container>
            </v-item-group>
            <!-- </question-block> -->
          </v-sheet>
        </v-col>

        <v-col cols="2">
          <v-sheet rounded="lg" min-height="268">
            <team-second class="px-0 mx-0"></team-second>
          </v-sheet>

          <v-sheet rounded="lg" min-height="50" class="mt-5">
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-row no-gutters>
                <v-col cols="12" class="mb-0 pb-0">
                  <v-btn width="100%" height="auto" @click="setNextQuest"
                    :color="curRoundName == 'ПРОСТАЯ ИГРА' ? 'green' : '' 
                        || curRoundName == 'ДВОЙНАЯ ИГРА' ? 'blue' : '' 
                        || curRoundName == 'ТРОЙНАЯ ИГРА' ? 'red' : '' 
                        || curRoundName == 'ИГРА НАОБОРОТ' ? 'purple' : ''"
                    elevation="10"
                  >
                    <v-icon size="50" color="white">mdi-chevron-double-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-flex>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamFirst from "../components/TeamFirst.vue";
import TeamSecond from "../components/TeamSecond.vue";
// import soundOpen from "../assets/sound/open.wav";
// import soundLevel from "../assets/sound/level.wav";
export default {
  data() {
    return {
      nextQuest: false,
      toggle_exclusive: [],
      currentQuest: null,
      roundPoints: null,
      alertPointDistr: false,
      chAlertPointDistr: false,
      chePressAnswer: true,
      curRoundName: null,
      cheepsColor: 'blue'
    };
  },

  // created() {
  //   // Проигрывание звуков нажатия
  //   this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2FStartGame.mp3?alt=media&token=a250ee7a-883b-4cfa-ad63-7f1bbadb533a") 

  // },

  computed: {
    questionAnswere() {
      return this.$store.getters.getAnsweres;
    },
    // для наблюдателя за распределением очков раунда
    roundScore() {
      return this.$store.getters.getTotalRoundPoint;
    },
  },

  watch: {
    // наблюдает за распределением очков раунда
    roundScore() {
      let roundSco = this.$store.getters.getTotalRoundPoint;
      // console.log('roundSco => ' + roundSco);
      if (roundSco == 0) {
        this.chePressAnswer = true;
        this.chAlertPointDistr = false;
        this.alertPointDistr = false;
      } else if (roundSco != 0 && this.chePressAnswer == true) {
        this.chAlertPointDistr = true;
      }
    },
  },

  methods: {
    async setNextQuest() {
      this.cheRoundDistribut();
      this.nextQuest = true;
      this.toggle_exclusive = []; // закрытие открытых ответов
      await this.$store.dispatch("SET_QUEST_NUMBER", this.nextQuest);
      this.$store.dispatch("LOAD_QUESTION");
      this.questionText();
      this.$store.dispatch("IS_NEXT_ROUND_START", true);
    },

    async setPrevQuest() {
      this.cheRoundDistribut();
      this.nextQuest = false;
      this.toggle_exclusive = [];
      await this.$store.dispatch("SET_QUEST_NUMBER", this.nextQuest);
      this.$store.dispatch("LOAD_QUESTION");
      this.questionText();
      this.$store.dispatch("IS_NEXT_ROUND_START", true);
    },

    // подсчет суммы очков за раунд
    async collectPoints(curPoint) {
      this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fopen.wav?alt=media&token=52983954-966c-48e9-bdb0-a7c88f1849c9");
      this.chePressAnswer = true;
      await this.$store.dispatch("CUR_ROUND_POINTS", curPoint);
      this.roundPoints = this.$store.getters.getTotalRoundPoint;
      this.$store.dispatch("IS_NEXT_ROUND_START", false);
    },

    // текст текущего вопроса
    questionText() {
      this.currentQuest = this.$store.getters.getQuestText;
      this.curRoundName = this.$store.getters.getRoundName;
    },

    // проверка расперделения очков раунда для вывода предупреждающего сообщения
    cheRoundDistribut() {
      this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Flevel.wav?alt=media&token=a37e83de-11a3-423c-a670-c96427555a17");
      const check = this.chAlertPointDistr;
      if (check) {
        this.alertPointDistr = true;
      } else {
        this.alertPointDistr = false;
      }
    },

    // Проигрывание звуков нажатия
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  },
  components: {
    TeamFirst,
    TeamSecond,
  },
  // не забыть вставить ссылку на источник звука Sound from Zapsplat.com
};
</script>

<style>

</style>