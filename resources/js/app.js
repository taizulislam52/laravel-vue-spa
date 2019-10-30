import router from "./routes";

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios';


Vue.component('app-root', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
    router
});
