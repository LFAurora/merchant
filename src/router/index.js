/*
路由器对象模块
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/Login.vue'
import  Home from '../pages/Home/Home.vue'
import Main from '../pages/Main/Main.vue'
import MyShop from '../pages/MyShop/MyShop.vue'
import Message from '../pages/Message/Message.vue'
import Community from '../pages/Community/Community.vue'
import Setting from '../pages/Setting/Setting.vue'
import AddShop from '../pages/AddShop/AddShop.vue'
import AddMain from '../pages/AddMain/AddMain.vue'
import CategoryItem from '../pages/AddMain/CategoryItem/CategoryItem.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/addmain',
      component:AddMain,
    },
    {
      path:'/addshop',
      component:AddShop,
    },
    {
      path:'/category',
      component:CategoryItem,
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/main',
      component:Main,
      children:[
        {
          path:'/main/myshop',
          component:MyShop,
          meta:{
            showFooter:true
          },
        },
        {
          path: '/main/setting',
          component: Setting,
          meta:{
            showFooter:false
          },
        },
        {
          path:'/main/message',
          component:Message,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/main/community',
          component:Community,
          meta:{
            showFooter:true
          }
        },
        {
          path:'',
          redirect:'/main/myshop'
        },
      ]
    },
  ]
})
