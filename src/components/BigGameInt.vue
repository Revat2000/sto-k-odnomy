<template>
  <v-main :class="`${bgStyle}`" style="padding-top: 80px" height="auto">
    <!-- <v-main
  style="padding-top: 100px; height: 95vh; background-image: url('https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/main.jpeg?alt=media&token=fd3485f5-7320-4f00-80d1-484e93398d13');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top; "> -->

    <v-sheet min-height="87vh" rounded="lg" :class="`${bgStyle}`">

      <v-flex xs10 sm10 md10 lg10 xl10 offset-1>
        <v-row no-gutters class="pb-10">
          <v-col cols="12">
            <v-flex xs10 sm10 md10 lg10 xl10 offset-1>
              <v-container fluid>
                <v-card elevation="3">
                  <v-progress-linear
                    v-model="progress"
                    :buffer-value="buffer"
                    color="green accent-3"
                    height="50"
                  >
                    <template v-slot:default="{ value }">
                      <!-- <h2>{{ value * 3 }}</h2> -->
                      <v-avatar  size="50" >
                        <span class="darck--text headline">{{ value * 2 }}</span>
                      </v-avatar>
                    </template>
                  </v-progress-linear>
                </v-card>
              </v-container>
            </v-flex>
          </v-col>
        </v-row>
      </v-flex>


      <v-flex xs12 sm10 md10 lg10 xl10 offset-1>
        <v-row class="pt-6">
          <!-- игрок 1 -->
          <v-col cols="4">
            <v-flex xs12 sm10 md10 lg10 xl10 offset-1>
              <v-card dark height="100%" elevation="3" :class="`${cardStyle}`">
                <v-container fluid>
                  <v-card-title class="headline justify-center"
                    >ПЕРВЫЙ ИГРОК</v-card-title
                  >
                </v-container>
                <v-container fluid>
                  <v-card-title
                    class="headline justify-center"
                    v-text="totalScoreP1"
                  ></v-card-title>
                </v-container>
                <v-row no-gutters justify="center">
                  <v-card-subtitle class="headline justify-center">
                    <v-input>
                      <v-text-field
                        hide-details="auto"
                        v-model="scoreP1"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-input>
                  </v-card-subtitle>
                </v-row>
                <v-card-actions :class="`${btnStyle}`">
                  <v-row no-gutters justify="space-between">
                    <v-spacer></v-spacer>
                    <v-btn
                      :class="`${btnStyle}`"
                      dark
                      elevation="0"
                      height="40px"
                      width="100%"
                      @click="setCurP1Score(scoreP1)"
                      >Добавить очки
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-col>

          <!-- баннер -->
          <v-col cols="4">
            <v-flex xs12 sm12 md12>
              <v-card height="100%" elevation="0">
                <v-container fluid :class="`${bgStyle}`">
                  <v-img
                    src="https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/sto-k-odnomy350x319.png?alt=media&token=2aee5787-b59c-4e78-8945-081bfb4cd999"
                    v-anime="{ rotate: '1turn', duration: 15000, loop: false }"
                  ></v-img>
                </v-container>
              </v-card>
            </v-flex>
          </v-col>

          <!-- игрок 2 -->
          <v-col cols="4">
            <v-flex xs12 sm10 md10 lg10 xl10 offset-1>
              <v-card dark height="100%" elevation="3" :class="`${cardStyle}`">
                <v-container fluid>
                  <v-card-title class="headline justify-center"
                    >ВТОРОЙ ИГРОК</v-card-title
                  >
                </v-container>
                <v-container fluid>
                  <v-card-title
                    class="headline justify-center"
                    v-text="totalScoreP2"
                  ></v-card-title>
                </v-container>
                <v-row no-gutters justify="center">
                  <v-card-subtitle class="headline justify-center">
                    <v-input>
                      <v-text-field
                        hide-details="auto"
                        v-model="scoreP2"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-input>
                  </v-card-subtitle>
                </v-row>
                <v-card-actions :class="`${btnStyle}`">
                  <v-row no-gutters justify="space-between">
                    <v-spacer></v-spacer>
                    <v-btn
                      :class="`${btnStyle}`"
                      dark
                      elevation="0"
                      height="40px"
                      width="100%"
                      @click="setCurP2Score(scoreP2)"
                      >Добавить очки
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-col>
        </v-row>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12 >
        <v-row no-gutters class="pt-13" >
          <v-col cols="12" align="center" justify="center">
            <v-flex xs2 sm2 md2 lg2 xl2  >
              <v-btn
                class="mx-2"
                fab
                dark
                x-large
                color="red accent-4"
                @click.prevent="playErrorSound"
              >
                <v-icon dark size="70">
                  mdi-alert-circle-outline
                </v-icon>
              </v-btn>
            </v-flex>
          </v-col>
        </v-row>
      </v-flex>

    </v-sheet>
  </v-main>
</template>

<script>
// import soundWin from "../assets/sound/win.wav";
// import soundDistribute from "../assets/sound/distribute.wav";
// import soundError from "../assets/sound/bad.wav";
export default {
  data: () => ({
    scoreP1: null,
    totalScoreP1: 0,
    scoreP2: null,
    totalScoreP2: 0,
    comandScore: 0,
    buffer: 200,
    progress: 0,
    bgStyle: "yellow",
    btnStyle: "purple",
    cardStyle: "cyan"
  }),

  created() {
  // Проигрывание звуков нажатия
  this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fbig-game.mp3?alt=media&token=948aeec4-14be-4ac3-ad52-49d63ec35295") 

  },

  

  methods: {
    setCurP1Score(val) {
      try {
        let totalScoreP1 = this.totalScoreP1;
        totalScoreP1 = Number(this.totalScoreP1) + Number(val);
        // console.log(totalScoreP1);
        this.totalScoreP1 = totalScoreP1;
        this.scoreP1 = null;
        this.totalComandScore();
      } catch (err) {
        console.log(err);
      }
    },

    setCurP2Score(val) {
      try {
        let totalScoreP2 = this.totalScoreP2;
        totalScoreP2 = Number(this.totalScoreP2) + Number(val);
        // console.log(totalScoreP2);
        this.totalScoreP2 = totalScoreP2;
        this.scoreP2 = null;
        this.totalComandScore();
      } catch (err) {
        console.log(err);
      }
    },

    playErrorSound() {
      this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2F100-k-1-the-same-answer.mp3?alt=media&token=b62d64dc-a33b-4402-bec6-f670be3089ef");
    },

    totalComandScore() {
      try {
        const totalScoreP1 = this.totalScoreP1;
        const totalScoreP2 = this.totalScoreP2;
        let comandScore = this.comandScore;
        comandScore = Number(totalScoreP1) + Number(totalScoreP2);
        this.comandScore = comandScore;
        this.$store.dispatch('SET_TOTAL_BIG_SCORE', comandScore);
        this.fillProgress();
        if (comandScore >= 200) {
          this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fwin.wav?alt=media&token=67191d4c-d532-4966-a056-6f250ed743b8");
        } else {
          this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fdistribute.wav?alt=media&token=819642f6-f682-452b-843c-92cef9911ad7");
        }
      } catch (err) {
        console.log(err);
        
      }
    },

    fillProgress() {
      let gameScore = this.comandScore;
      let progressVal = this.progress;
      const buffer = this.buffer;
      progressVal = (gameScore * 100) / buffer;
      this.progress = progressVal;
      console.log(this.progress);
    },

    // Проигрывание звуков нажатия
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style scoped>
</style>