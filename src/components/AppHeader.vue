<template>
  <v-app-bar app color="white" flat> 
    <v-avatar
    class="hidden-sm-and-down"
    size="50"
    >
      <!-- <v-img src="https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/snake.png?alt=media&token=2f54356a-280d-4f1f-bff7-46084ad2861a"></v-img> -->
      <!-- <v-img src="https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/snake2.png?alt=media&token=eb56803e-bb67-4363-bbce-a7e94ed413ea"></v-img> -->
      <!-- <v-img src="https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/snake3.png?alt=media&token=23d60151-0327-4523-97ff-c3231a14ea85"></v-img> -->
      <v-img src="https://firebasestorage.googleapis.com/v0/b/sto-k-odnomy.appspot.com/o/snake4.png?alt=media&token=13308a2e-27fa-4222-8ad2-de1890e17696"></v-img>
    <!-- <v-icon size="30" dark>mdi-needle</v-icon> -->
    </v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.id"
          :to="link.route"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          <v-spacer></v-spacer>
           {{ link.title }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        size="50"
        style="border-style: solid; border-width: 3px; border-color: #666666"
      ><v-icon size="30" color="#666666">mdi-needle</v-icon></v-avatar>
    </v-app-bar>
</template>

<script>
export default {
   data: () => ({
      links: [ 
        {
            icon: 'mdi mdi-drama-masks',
            title: '100 к 1',
            route: '/home',
            id: '333'
        },
        {
            icon: 'mdi mdi-bullseye-arrow',
            title: 'Старт',
            route: '/game',
            id: '222'
        },
        {
            icon: 'mdi mdi-crown-outline',
            title: 'Супер игра',
            route: '/biggame',
            id: '111'
        }
      ],
    }),
 
    // mdi mdi-guy-fawkes-mask
                
}
</script>

<style>

</style>