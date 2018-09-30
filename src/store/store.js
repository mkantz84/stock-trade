import Vue from "vue";
import Vuex from "vuex";

import stocks from './modules/stocks';
import portfolio from "./modules/portfolio";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }


  // state: {
  //   funds: 10,
  //   stocks: [
  //     {id: 1, name: 'BMW', price: 110},
  //     {id: 2, name: 'Google', price: 200},
  //     {id: 3, name: 'Apple', price: 250},
  //     {id: 4, name: 'Twitter', price: 8},
  //   ]
  // },
  // mutations: {
  //   byStock: (state, payload) => {
  //     state.funds = payload;
  //   }
  // }
});
