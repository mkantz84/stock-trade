// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from "./store/store"
import vueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(vueResource);

Vue.http.options.root = 'https://vue-js-15b99.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return response.body }
  });
});

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
