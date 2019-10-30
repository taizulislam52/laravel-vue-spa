import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import HomePost from "./components/posts/HomePost";
import CreatePost from "./components/posts/CreatePost";
import EditPost from "./components/posts/EditPost";
import Home from "./components/Home";

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
                name: 'create',
                path: '/posts/create',
                component: CreatePost
            },
            {
                name: 'edit',
                path: '/posts/:id/edit',
                component: EditPost
            },


];
const router = new VueRouter({ mode: 'history', routes: routes});

export default router;
