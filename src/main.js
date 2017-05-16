import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
console.log(Vue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
