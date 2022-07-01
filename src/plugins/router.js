import HomePage from "@/pages/HomePage";
import BookView from "@/pages/BookView";
import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/book-view',
        component: BookView
    },
]

export default createRouter({

    history: createWebHashHistory(),
    routes
})
