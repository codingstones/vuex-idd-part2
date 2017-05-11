import Vue from 'vue';
import Router from 'vue-router';
import Sessions from '@/pages/Sessions';
import Session from '@/pages/Session';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Sessions', component: Sessions },
    { name: 'new-session', path: '/sessions/new', component: Session },

  ],
});
