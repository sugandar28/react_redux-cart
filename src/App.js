// feature 1
import React from "react";

import Products from "./component/Products";
import Filter from "./component/Filter";
import Cart from "./component/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

  //create order
  submitOrder = (order) => {
    alert("need to save order for" + order.name);
  };
  //---------------------removeFromCart
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

  //------------------------------ add to cart
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyIncart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyIncart = true;
      }
    });

    if (!alreadyIncart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  //-----------------------------sort products

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/"> React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  submitOrder={this.submitOrder}
                />
              </div>
            </div>
          </main>
          <footer>All Rights are reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
