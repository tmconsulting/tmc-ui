import {VueConstructor} from 'vue';
import StButtonGroup from './components/button/button-group.vue';
import StButton from './components/button/button.vue';
import StCol from './components/col/col.vue';
import StIcon from './components/icon/icon.vue';
import StRow from './components/row/row.vue';

const install = (Vue: VueConstructor) => {
  Vue.component('st-button', StButton);
  Vue.component('st-button-group', StButtonGroup);
  Vue.component('st-icon', StIcon);
  Vue.component('st-row', StRow);
  Vue.component('st-col', StCol);

  Vue.prototype.$ELEMENT = {
    size: '',
  };
};

export default {
  install,
  StButton,
  StButtonGroup,
  StIcon,
  StRow,
  StCol,
}
