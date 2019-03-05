import {VueConstructor} from 'vue';
import TmcButtonGroup from './components/button/button-group.vue';
import TmcButton from './components/button/button.vue';
import TmcIcon from './components/icon/icon.vue';

const install = (Vue: VueConstructor) => {
  Vue.component('tmc-button', TmcButton);
  Vue.component('tmc-button-group', TmcButtonGroup);
  Vue.component('tmc-icon', TmcIcon);

  Vue.prototype.$ELEMENT = {
    size: '',
  };
};

export default {
  install,
  TmcButton,
  TmcButtonGroup,
  TmcIcon,
}
