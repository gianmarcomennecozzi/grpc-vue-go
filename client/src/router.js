import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import Teams from "./Pages/Teams";
import ChallengePage from "./Pages/ChallengePage";
import VMs from "./Pages/VMs";
import TeamAction from "./Pages/TeamAction";
import Signup from "./Pages/Signup";
import Graphs from "./Pages/Graphs";
import Users from "./Pages/Users";
import Challenge from "./Pages/Challenge";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { name: 'home', path: '/', component: HomePage },
        { name: 'login', path: '/login', component: LoginPage },
        { name: 'signup', path: '/signup', component: Signup },
        { name: 'event', path: '/events/:tag', component: Teams },
        { name: 'team', path: '/events/:tag/:id', component: TeamAction },
        { name: 'challenges', path: '/challenges', component: ChallengePage},
        { name: 'challenge', path: '/challenges/:tag', component: Challenge},
        { name: 'users', path: '/users', component: Users},
        { name: 'vms', path: '/vms', component: VMs },
        { name: 'graphs', path: '/graphs', component: Graphs},

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next({
            path: '/login',
            query: { returnUrl: to.path }
        });
    }

    next();
})