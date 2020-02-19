import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import Topic from "../pages/topic/Topic";
import Search from "../pages/serach/Search";
import Mine from "../pages/mine/Mine";
import layout from "../pages/layout";
import play from "../pages/play";
Vue.use(Router);

export default new Router({
  linkActiveClass:'active',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path:'',
          component:Home,
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path:'search',
          component:Search
        },
        {
          path:'topic',
          component:Topic
        }
      ]
    },
    {
      path: '/play/:id',
      component: play,
    }

  ]
})
