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
import Customer from '../pages/Customer/Customer.vue'
import Order from '../pages/Order/Order.vue'
import Income from '../pages/Income/Income.vue'
import AccountManagement from '../pages/Setting/AccountManagement/AccountManagement.vue'
import Information from '../pages/Setting/AccountManagement/Information/Information.vue'
import Binding from '../pages/Setting/AccountManagement/Information/BindingCard/BindingCard.vue'
import Modification from '../pages/Setting/AccountManagement/Information/Modification/Modification.vue'
import ForgetPassword from '../pages/Login/ForgetPassword/ForgetPassword.vue'
import InformationNotification from '../pages/Setting/InformationNotification/InformationNotification.vue'
import Shop from '../pages/Setting/Shop/Shop.vue'
import ChangePwd from '../pages/Setting/AccountManagement/ChangePwd/ChangePwd.vue'
import BatchManagement from '../pages/AddShop/BatchManagement/BatchManagement.vue'
import BatchManagementO from '../pages/AddShop/BatchManagement/BatchManagement1.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/login',
      component:Login,
      children: [

      ]
    },
    {
      path:'/forget',
      component:ForgetPassword
    },
    {
      path:'/home',
      component:Home
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
          path:'/main/addmain',
          component:AddMain,
        },
        {
          path:'/main/addshop',
          component:AddShop,
        },
        {
          path:'/main/category',
          component:CategoryItem,
        },
        {
          path:'',
          redirect:'/main/myshop'
        },
        {
          path:'/main/customer',
          component:Customer,
        },
        {
          path:'/main/order',
          component:Order,
        },
        {
          path:'/main/income',
          component:Income,
        },
        {
          path:'/main/account',
          component:AccountManagement,
        },
        {
          path:'/main/information',
          component:Information,
        },
        {
          path:'/main/binding',
          component:Binding,
        },
        {
          path:'/main/modification',
          component:Modification,
        },
        {
          path:'/main/notification',
          component:InformationNotification,
        },
        {
          path:'/main/shop',
          component:Shop,
        },
        {
          path:'/main/change',
          component:ChangePwd,
        },
        {
          path:'/main/batch',
          component:BatchManagement,
        },
        {
          path:'/main/batchO',
          component:BatchManagementO,
        },
      ]
    },
  ]
})
