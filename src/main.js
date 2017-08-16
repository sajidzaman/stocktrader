import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';
import store from './store/store'
import Axios from 'axios';

Vue.use(VueRouter);
//Vue.use(Axios);

Vue.filter('currency',(value) => {
    return '$' + value.toLocaleString();
})

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
