import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import ExampleComponent from "../components/ExampleComponent";
import DemoComponent from "../components/DemoComponent";

const routes = [
    {
        path: '/',
        name: 'home',
        component: ExampleComponent
    },
    {
        path: '/demo',
        name: 'demo',
        component: DemoComponent
    }]


const router = new VueRouter({
    mode: 'history',
    routes: routes
})
export default router
