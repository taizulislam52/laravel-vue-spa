import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import HomePost from "./components/posts/HomePost";
import CreatePost from "./components/posts/CreatePost";
import EditPost from "./components/posts/EditPost";
import Home from "./components/Home";
import HomeCustomer from "./components/customers/HomeCustomer";
import CreateCustomer from "./components/customers/CreateCustomer";
import EditCustomer from "./components/customers/EditCustomer";

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'posts',
        path: '/posts',
        component: HomePost


    },
            {
                name: 'post-create',
                path: '/posts/create',
                component: CreatePost
            },
            {
                name: 'post-edit',
                path: '/posts/:id/edit',
                component: EditPost
            },
    {
        name: 'customers',
        path: '/customers',
        component: HomeCustomer


    },
    {
        name: 'customer-create',
        path: '/customers/create',
        component: CreateCustomer
    },
    {
        name: 'customer-edit',
        path: '/customers/:id/edit',
        component: EditCustomer
    },


];
const router = new VueRouter({ mode: 'history', routes: routes});

export default router;
