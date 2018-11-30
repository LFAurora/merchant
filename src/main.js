// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import store from './store'
import { Tab, Tabs,List,Tabbar, TabbarItem,NoticeBar,SwipeCell,
  NavBar,PullRefresh,Cell, CellGroup,Uploader} from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(SwipeCell);
Vue.use(Cell).use(CellGroup);
Vue.use(PullRefresh);
Vue.use(NavBar,Uploader,);
Vue.use(Uploader);
import { Dialog } from 'vant';
Vue.use(Dialog)
import { Field } from 'vant';
Vue.use(Field);
Vue.use(Vuex)
import { Popup } from 'vant';
Vue.use(Popup);
import { Picker } from 'vant';
Vue.use(Picker);
import { Search } from 'vant';
Vue.use(Search);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);
import { Button } from 'vant';
Vue.use(Button);
import { Toast } from 'vant';
Vue.use(Toast);
import VueSweetAlert from './plugins/vue-sweetalert.js'
Vue.use(VueSweetAlert)
import { SwitchCell } from 'vant';
Vue.use(SwitchCell);
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
import { Rate } from 'vant';
Vue.use(Rate);
import { Area } from 'vant';
Vue.use(Area);
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  // store,
  components: { App },
  template: '<App/>',
  router
})
