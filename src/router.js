import Vue from "vue";
import Router from "vue-router";
import Problem from "./views/Problem";
import Slots from "./views/Slots";
import RenderlessComponent from "./views/RenderlessComponent";
import PhongPV from "./views/Assignment/PhongPV";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "problem",
      component: Problem
    },
    {
      path: "/slots",
      name: "slots",
      component: Slots
    },
    {
      path: "/renderless-component",
      name: "renderless component",
      component: RenderlessComponent
    },
    {
      path: "/phongpv",
      name: "phongpv",
      component: PhongPV
    }
  ]
});
