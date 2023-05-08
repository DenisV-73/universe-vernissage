import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
// import axios from 'axios';

import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Vuelidate);
Vue.component('HelloWorld', HelloWorld);

Vue.config.productionTip = false

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://'; //LINK - Havve to Fill in the right endpoint

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
