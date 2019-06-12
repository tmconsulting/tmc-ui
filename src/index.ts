import {VueConstructor} from 'vue';
import TmcButtonGroup from './components/button/button-group.vue';
import TmcButton from './components/button/button.vue';
import TmcCol from './components/col/col.vue';
import TmcIcon from './components/icon/icon.vue';
import TmcRow from './components/row/row.vue';

const install = (Vue: VueConstructor) => {
  Vue.component('tmc-button', TmcButton);
  Vue.component('tmc-button-group', TmcButtonGroup);
  Vue.component('tmc-icon', TmcIcon);
  Vue.component('tmc-row', TmcRow);
  Vue.component('tmc-col', TmcCol);

  Vue.prototype.$ELEMENT = {
    size: '',
  };
};

export default {
  install,
  TmcButton,
  TmcButtonGroup,
  TmcIcon,
  TmcRow,
  TmcCol,
}
