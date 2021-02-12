import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import firebase from 'firebase/app'
import VueAnime from 'vue-animejs';
  
Vue.use(VueAnime)

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App), 
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyCXcyJGHb7D-yWQd4K4W1FhaF5a1JRtThQ",
      authDomain: "sto-k-odnomy.firebaseapp.com",
      projectId: "sto-k-odnomy",
      storageBucket: "sto-k-odnomy.appspot.com",
      messagingSenderId: "70027502296",
      appId: "1:70027502296:web:cfa0f69f76ab4c2dc82dad",
      measurementId: "G-2VXRTEF3KE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }
}).$mount('#app')
