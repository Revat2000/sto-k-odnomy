<template>
  <v-main   style="padding-top: 50px; background-image: url('https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/main.jpeg?alt=media&token=fd3485f5-7320-4f00-80d1-484e93398d13');
  background-repeat: no-repeat;
  background-size:  contain;
  background-position: top; ">
    <!-- <v-container  xs12 sm12 md12 lg12 xl12> -->
      <v-flex xs12 sm12 md12 lg12 xl12 >
      <v-img class="mb-0 mt-1"
       height="89vh"
       width="100%"
       contain
      ></v-img>
      
       </v-flex>
    <!-- </v-container> -->
  </v-main>
</template>

<script>
// import soundStart from '../assets/sound/main.wav';
export default {
created() {
  // Проигрывание звуков нажатия
      // this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fmain.mp3?alt=media&token=d26506e7-0e5f-49ec-a66e-a406ef061f34") 

    this.playSound("https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/Sounds%2Fstart.wav?alt=media&token=5f7b6a28-4fe4-496b-9a6f-f35a08809009") 
},

methods: {
  playSound(sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
}
}
</script>

<style>

</style>