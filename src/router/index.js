/*
路由器对象模块
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Home from '../pages/Home/Home.vue'
import Main from '../pages/Main/Main.vue'
import MyShop from '../pages/MyShop/MyShop.vue'
import Message from '../pages/Message/Message.vue'
import Community from '../pages/Community/Community.vue'
import Setting from '../pages/Setting/Setting.vue'
import AddShop from '../pages/AddShop/AddShop.vue'
import AddMain from '../pages/AddMain/AddMain.vue'
import CompileShop from '../pages/CompileShop/CompileShop.vue'
import Customer from '../pages/Customer/Customer.vue'
import Order from '../pages/Order/Order.vue'
import WaitPayment from '../pages/Order/WaitPayment/WaitPayment.vue'
import AlreadyShipments from '../pages/Order/AlreadyShipments/AlreadyShipments.vue'
import Refund from '../pages/Order/Refund/Refund.vue'
import WaitShipments from '../pages/Order/WaitShipments/WaitShipments.vue'
import Income from '../pages/Income/Income.vue'
import AccountManagement from '../pages/Setting/AccountManagement/AccountManagement.vue'
import Information from '../pages/Setting/AccountManagement/Information/Information.vue'
import Binding from '../pages/Setting/AccountManagement/Information/BindingCard/BindingCard.vue'
import Modification from '../pages/Setting/AccountManagement/Information/Modification/Modification.vue'
import ForgetPassword from '../pages/Login/ForgetPassword/ForgetPassword.vue'
import InformationNotification from '../pages/Setting/InformationNotification/InformationNotification.vue'
import Shop from '../pages/Setting/Shop/Shop.vue'
import ShopDecoration from '../pages/ShopDecoration/ShopDecoration.vue'
import ChangePwd from '../pages/Setting/AccountManagement/ChangePwd/ChangePwd.vue'
import BatchManagement from '../pages/AddShop/BatchManagement/BatchManagement.vue'
import BatchManagementO from '../pages/AddShop/BatchManagement/BatchManagement1.vue'
import UserMessage from '../pages/UserMessage/UserMessage.vue'
import ManagerBirthday from '../pages/UserMessage/ManagerBirthday/ManagerBirthday.vue'
import ShopSignature from '../pages/UserMessage/ShopSignature/ShopSignature.vue'
import ShopName from '../pages/UserMessage/ShopName/ShopName.vue'
import ShopAddress from '../pages/UserMessage/ShopAddress/ShopAddress.vue'
import Evaluate from '../pages/Evaluate/Evaluate.vue'
import AllEvaluate from '../pages/Evaluate/AllEvaluate/AllEvaluate.vue'
import GoodReputation from '../pages/Evaluate/GoodReputation/GoodReputation.vue'
import NegativeComment from '../pages/Evaluate/NegativeComment/NegativeComment.vue'
import MediumReview from '../pages/Evaluate/MediumReview/MediumReview.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/register',
      component:Register,
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
      path:'/evaluate',
      component:Evaluate,
      children: [
        {
          path:'/evaluate/AllEvaluate',
          component:AllEvaluate,
        },
        {
          path:'/evaluate/GoodReputation',
          component:GoodReputation,
        },
        {
          path:'/evaluate/NegativeComment',
          component:NegativeComment,
        },
        {
          path:'/evaluate/MediumReview',
          component:MediumReview,
        },
        {
          path:'',
          redirect:'/evaluate/AllEvaluate'
        },
      ]
    },
    {
      path:'/order',
      component:Order,
      children:[
        {
          path:'/order/WaitShipments',
          component:WaitShipments,
        },
        {
          path:'/order/WaitPayment',
          component:WaitPayment,
        },
        {
          path:'/order/Refund',
          component:Refund,
        },
        {
          path:'/order/AlreadyShipments',
          component:AlreadyShipments,
        },
        {
          path:'',
          redirect:'/order/WaitShipments'
        },
      ]
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
          path:'/main/ShopDecoration',
          component:ShopDecoration,
        },
        {
          path:'/main/addshop',
          component:AddShop,
        },
        {
          path:'/main/CompileShop',
          component:CompileShop,
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
        {
          path:'/main/userMessage',
          component:UserMessage,
        },
        {
          path:'/main/shopName',
          component:ShopName,
        },
        {
          path:'/main/ManagerBirthday',
          component:ManagerBirthday,
        },
        {
          path:'/main/ShopSignature',
          component:ShopSignature,
        },
        {
          path:'/main/ShopAddress',
          component:ShopAddress,
        },
      ]
    },
  ]
})
