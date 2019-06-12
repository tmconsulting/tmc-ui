/* eslint-disable import/no-extraneous-dependencies */
import '../assets/scss/book-init.scss';
import Vue from 'vue';

import TmcButton from '../components/button/button.vue';
import TmcButtonGroup from '../components/button/button-group.vue';
import TmcIcon from '../components/icon/icon.vue';
import TmcRow from '../components/row/row.vue';
import TmcCol from '../components/col/col.vue';

Vue.component('tmc-button-group', TmcButtonGroup);
Vue.component('tmc-button', TmcButton);
Vue.component('tmc-icon', TmcIcon);
Vue.component('tmc-row', TmcRow);
Vue.component('tmc-col', TmcCol);
