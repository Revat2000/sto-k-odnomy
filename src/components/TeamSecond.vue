<template>
  <v-container fluid class="py-0">
    <v-col cols="12" class="text-center">
      <v-card flat>
        <v-col cols="12" class="py-0">
          <v-card-title class="text-h6 px-0 justify-center"
            >КОМАНДА 2</v-card-title
          >
          <!-- points avatar -->
          <v-avatar color="orange" size="62" rounded class="mr-2 mb-3">
            <span class="white--text headline" v-text="teamSecondPoints"></span>
          </v-avatar>

          <!-- error buttons block -->
          <v-card-actions class="py-0">
            <!-- <v-row> -->
            <v-btn-toggle v-model="toggle_exclusive" multiple>
              <v-col cols="8" class="pb-0 pl-0" offset="2">
                 <v-btn id="btnOne" class="mb-3" @click="setErrorArr">
                  <v-icon 
                  :color="toggle_exclusive[0] == 0 ? 'white' : 'black'" 
                  x-large
                >mdi-close-outline</v-icon>
                </v-btn>
                <v-btn id="btnTwo" class="mb-3" @click="setErrorArr">
                  <v-icon 
                  :color="toggle_exclusive[1] == 1 ? 'white' : 'black'" 
                  x-large
                >mdi-close-outline</v-icon>
                </v-btn>
                <v-btn id="btnThree" class="mb-3" @click="setErrorArr">
                  <v-icon 
                  :color="toggle_exclusive[2] == 2 ? 'white' : 'black'" 
                  x-large
                >mdi-close-outline</v-icon>
                </v-btn>
              </v-col>
            </v-btn-toggle>
          </v-card-actions>
        </v-col>
        <v-card-actions class="py-0 pl-0">
          <v-col cols="12">
            <v-btn color="warning" fab dark @click="pointsDistribut('second')">
              <v-icon size="30">mdi-trophy</v-icon>
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
// import soundError from "../assets/sound/bad.wav";
// import soundDistribute from "../assets/sound/distribute.wav";
export default {
  data() {
    return {
      teamSecondPoints: 0,
      toggle_exclusive: [],
    };
  },

  computed: {
    // для наблюдателя за переходом на следующий раунд
    nextRound() {
      return this.$store.getters.getNextRound;
    },
  },

  watch: {
    // наблюдает за распределением очков раунда
    nextRound() {
      // const roundNext = this.$store.getters.getNextRound
      if (this.$store.getters.getNextRound) {
        this.toggle_exclusive = [];
        this.$store.dispatch("CLEAR_TEAM_ERROR", "second");
      }
    },
  },

  methods: {
    // распределение очков раунда победившей команде
    async pointsDistribut(val) {
      this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fdistribute.wav?alt=media&token=819642f6-f682-452b-843c-92cef9911ad7");
      await this.$store.dispatch("POINTS_DISTRIBUT", val);
      this.teamSecondPoints = this.$store.getters.getSecondTeamScore;
      this.$store.dispatch("ZERRO_CUR_ROUND_POINTS");
    },

    // заполнение массива ошибок
    async setErrorArr() {
      this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2F100-k-1-wrong-answer.mp3?alt=media&token=3d164691-f2d0-400c-8630-3f948aef8412");
      await this.$store.dispatch("CLEAR_TEAM_ERROR", "second");
      const curErrArr = this.toggle_exclusive;
      await this.$store.dispatch("SECOND_TEAM_ERROR", curErrArr);
    },

    // Проигрывание звуков нажатия
    playSound(sound) {
      if (sound) {
        let audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style>
</style>