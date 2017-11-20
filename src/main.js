import Vue from 'vue';
import App from './App.vue';
import router from './router';
import utils from './mixins/utils';

Vue.mixin(utils);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
