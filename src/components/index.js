import Vue from "vue";
import Banner from "./banner.vue";
import StButton from "./button/index.vue";
import StRow from "./row/index.vue";
import StCol from "./col/index.vue";

const Components = {
  Banner,
  StButton,
  StRow,
  StCol,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
