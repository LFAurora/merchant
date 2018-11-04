// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import { Tab, Tabs,List,Tabbar, TabbarItem,NoticeBar,SwipeCell,
  NavBar,PullRefresh,Cell, CellGroup,Uploader } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(SwipeCell);
Vue.use(Cell).use(CellGroup);
Vue.use(PullRefresh);
Vue.use(NavBar,Uploader);
Vue.use(Uploader);
import { Dialog } from 'vant';
Vue.use(Dialog)
import { Field } from 'vant';
Vue.use(Field);

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})