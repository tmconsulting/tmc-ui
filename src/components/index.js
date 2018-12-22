import Vue from "vue";
import Banner from "./banner.vue";
import TmcButton from "./button/button.vue";

const Components = {
  Banner,
  TmcButton,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
