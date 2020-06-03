import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (products) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists;
  cartItems.forEach((x) => {
    if (x._id === products._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...products, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (products) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== products._id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
