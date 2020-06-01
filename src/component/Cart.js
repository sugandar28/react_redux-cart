import React, { Component } from "react";
import formateCurrency from "../util";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className=" cart cart-header">Cart is Empty</div>
        ) : (
          <div className=" cart cart-header">
            Your nave {cartItems.length} in the Cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formateCurrency(item.price)} x {item.count}
                    <button onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{"  "}
                  {formateCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button className="primary button">Proceed</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
