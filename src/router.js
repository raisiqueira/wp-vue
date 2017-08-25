import Vue from 'vue';
import VueRouter from 'vue-router';
import Post from './views/Post';
import Feed from './views/Feed';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Feed
  },
  {
    name: 'post',
    path: '/posts/:slug',
    component: Post
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
