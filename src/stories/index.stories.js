/* eslint-disable import/no-extraneous-dependencies */
import '../assets/scss/book-init.scss';
import Vue from 'vue';

import StButton from '../components/button/button.vue';
import StButtonGroup from '../components/button/button-group.vue';
import StIcon from '../components/icon/icon.vue';
import StRow from '../components/row/row.vue';
import StCol from '../components/col/col.vue';

Vue.component('st-button-group', StButtonGroup);
Vue.component('st-button', StButton);
Vue.component('st-icon', StIcon);
Vue.component('st-row', StRow);
Vue.component('st-col', StCol);
