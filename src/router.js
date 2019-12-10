import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/Home_page'

Vue.use(Router)

let router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/movie',
      name: 'film',
      component: () => import('./views/movie.vue')
    },
    {
      path:'/details',
      name:'moviedetail',
      component:()=>import('./views/movie_Child/details')
    },{
      path:'/personalCenter',
      name:'personalCenter',
      meta: {
        needLoginIn:true
      },
      component:()=>import('./views/movie_Child/PersonalCenter'),
      
    },{
      path:'/login',
      name:'login',
      component:()=>import('./views/login')
    },{
      path:'/shou',
      name:'shou',
      meta:{
        needLoginIn:true
      },
      component:()=>import('./views/movie_Child/shou')
      
    },{
      path:'/show',
      name:'show',
      component:()=>import('./views/global_state_management/show')
    },{
      path:'/shangping',
      name:'shangping',
      component:()=>import('./views/shangping')
    }
    ,{
      path:'/vuexlogin',
      name:'vuexLogin',
      component:()=>import('./views/vuex_login/login')
    },{
      path:'/register',
      name:'register',
      component:()=>import('./views/vuex_login/register')
    },{
      path:'/shoppingTrolley',
      name:'shoppingTrolley',
      component:()=>import('./views/shopping_trolley')
    },{
      path:'/shovuex',
      name:'shovuex',
      component:()=>import('./views/sho_vuex')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.needLoginIn){
    //做登录判断
    if(localStorage.getItem('token')){
      next();
    }else{
      next({
        name:'login'
      })
    }
  }else{
    next();
  }
})


export default router