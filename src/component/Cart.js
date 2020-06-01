import React, { Component } from "react";
import formateCurrency from "../util";
import CheckoutForm from "./CheckoutForm";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  // create order
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.submitOrder(order);
  };

  //handle checkout form input
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
                <button
                  className="primary button"
                  onClick={() => this.setState({ showCheckout: true })}
                >
                  Proceed
                </button>
              </div>
              {this.state.showCheckout && (
                <div>
                  <CheckoutForm
                    handleInput={this.handleInput}
                    createOrder={this.createOrder}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
