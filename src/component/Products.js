import React, { Component } from "react";
import formateCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                  <div className="product_price">
                    <div>{formateCurrency(product.price)}</div>
                    <button className="button primary"> Add To cart</button>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}