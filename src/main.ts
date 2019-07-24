import Vue from 'vue';
import App from './App.vue';
import StButton from './components/button/button.vue';
import StCol from './components/col/col.vue';
import StIcon from './components/icon/icon.vue';
import StRow from './components/row/row.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $ELEMENT: {
      size: string,
    }
  }
}

Vue.component('st-button', StButton);
Vue.component('st-icon', StIcon);
Vue.component('st-row', StRow);
Vue.component('st-col', StCol);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
