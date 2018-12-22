import Vue from 'vue';
import App from './App.vue';
import TmcButton from './components/button/button.vue';
import TmcIcon from './components/icon/icon.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $ELEMENT: {
      size: string,
    }
  }
}

Vue.component('tmc-button', TmcButton);
Vue.component('tmc-icon', TmcIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
