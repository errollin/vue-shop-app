export default {
  addToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['prods/products'];
    const product = products.find((prod) => prod.id === prodId);
    context.commit('addProductToCart', product);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
