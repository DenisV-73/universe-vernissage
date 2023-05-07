import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Vuelidate);
Vue.component('HelloWorld', HelloWorld);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
