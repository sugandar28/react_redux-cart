import React, { Component } from "react";

export default class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="cart">
        <form onSubmit={this.props.createOrder}>
          <ul className="form-container">
            <li>
              <label>Email</label>
              <input
                name="email"
                type="emal"
                required
                onChange={this.props.handleInput}
              ></input>
            </li>
            <li>
              <label>Name</label>
              <input
                name="name"
                type="text"
                required
                onChange={this.props.handleInput}
              ></input>
            </li>
            <li>
              <label>Address</label>
              <input
                name="address"
                type="text"
                required
                onChange={this.props.handleInput}
              ></input>
            </li>
            <li>
              <button className="button primary" type="submit">
                Checkout
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
