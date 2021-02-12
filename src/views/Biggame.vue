<template>
  <div>
    <big-game></big-game>
    <fire-work :boxHeight="'90%'" :boxWidth="'100%'" class="mt-15"></fire-work>
  </div>
</template>

<script>

import BigGame from '../components/BigGameInt.vue';
import FireWork from '../components/fireworks.vue';
export default {
  components: {
    BigGame,
    FireWork
  }
}
</script>