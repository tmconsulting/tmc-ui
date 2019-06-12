import Vue from "vue";
import Banner from "./banner.vue";
import TmcButton from "./button/button.vue";
import TmcRow from "./row/row.vue";
import TmcCol from "./col/col.vue";

const Components = {
  Banner,
  TmcButton,
  TmcRow,
  TmcCol,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
