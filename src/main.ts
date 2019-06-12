import Vue from 'vue';
import App from './App.vue';
import TmcButton from './components/button/button.vue';
import TmcCol from './components/col/col.vue';
import TmcIcon from './components/icon/icon.vue';
import TmcRow from './components/row/row.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $ELEMENT: {
      size: string,
    }
  }
}

Vue.component('tmc-button', TmcButton);
Vue.component('tmc-icon', TmcIcon);
Vue.component('tmc-row', TmcRow);
Vue.component('tmc-col', TmcCol);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
