import router from "./routes";

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios';
import { Form, HasError, AlertError } from 'vform'
Vue.use(axios);
window.Form = Form;
Vue.component('app-root', require('./components/App.vue').default);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

const app = new Vue({
    el: '#app',
    router
});
