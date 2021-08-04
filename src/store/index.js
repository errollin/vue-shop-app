import { createStore } from 'vuex';
import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';
import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});
