<template>
  <v-app id="inspire">
    <app-header></app-header>
    <v-main class="pt-1" >
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="px-1">
        <router-view/>
      </v-container>
    </v-main>
    <!-- <app-footer></app-footer> -->
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
// import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    // AppFooter
  }
}
</script>

<style lang="scss">
 
</style>
