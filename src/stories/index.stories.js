/* eslint-disable import/no-extraneous-dependencies */
import './assets/scss/stories/index.scss';
import Vue from 'vue';

import StButton from '../components/button/index.vue';
import StButtonGroup from '../components/button-group/index.vue';
import StIcon from '../components/icon/index.vue';
import StRow from '../components/row/index.vue';
import StCol from '../components/col/index.vue';

Vue.component('st-button-group', StButtonGroup);
Vue.component('st-button', StButton);
Vue.component('st-icon', StIcon);
Vue.component('st-row', StRow);
Vue.component('st-col', StCol);
