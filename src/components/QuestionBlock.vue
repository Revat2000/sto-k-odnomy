// Question block for current round
<template>
    <v-item-group multiple dark v-model="toggle_exclusive">
      <v-container>
          <v-col
            v-for="answer in questionAnswere"
            :key = "answer.numAnswer"
            cols="12"
            md="10"
            offset="md-1"
            
          >
            <v-item 
              v-slot="{ active, toggle }"
              
             >
              <v-card 
                :color="active && nextQuestion ? 'primary' : ''"
                class="d-flex align-left"
                dark
                height="3em"
                width="100%"
                @click="toggle"
               
                

              >
                <span style="margin-left: 10px; margin-top: 10px;">{{answer.numAnswer}}</span>
              
                <v-scroll-y-transition >
                  <div 
                    v-if="active && nextQuestion"
                    class="display-1 flex-grow-1 text-center"
                    
                  >{{answer.textAnswer}} - {{answer.points}}
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
      </v-container>
    </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      nextQuestion: true,
      toggle_exclusive: [],
      
    }
  },

 

 

  computed: {
    questionAnswere(){
      return this.$store.getters.getAnsweres
      
    }
    
  },

}
</script>

<style>

</style>