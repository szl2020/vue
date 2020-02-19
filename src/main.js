// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.css'
import less from "less";
import axios from 'axios'
import VueAwesomeSwiper from "vue-awesome-swiper/src";
import Tabs from "./components/Tabs";
import backtop from "./components/backTop";
import '../src/assets/font/iconfont.css'

import 'swiper/dist/css/swiper.css'
import Tab from "./components/Tabs/Tab";
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(Tabs);
Vue.use(backtop);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
