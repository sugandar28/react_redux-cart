import React, { Component } from "react";
import Products from "../component/Products";
import Filter from "../component/Filter";
import Cart from "../component/Cart";

export default class HomeScreens extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
