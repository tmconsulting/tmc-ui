import Vue from "vue";
import Banner from "./banner.vue";
import StButton from "./button/button.vue";
import StRow from "./row/row.vue";
import StCol from "./col/col.vue";

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
