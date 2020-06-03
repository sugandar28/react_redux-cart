// feature 1
import React from "react";

import Products from "./component/Products";
import Filter from "./component/Filter";
import Cart from "./component/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
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
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
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
