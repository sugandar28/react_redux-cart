import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../actions/orderActions";
import formateCurrency from "../util";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  render() {
    const { orders } = this.props;
    return !orders ? (
      <div>NO Orders yet</div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <tabel>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{formateCurrency(order.total)}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  {order.cartItems.map((i) => {
                    return (
                      <div>
                        {i.count} {" x "}
                        {i.title}
                      </div>
                    );
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </tabel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { orders: state.order.orders };
};
export default connect(mapStateToProps, { fetchOrder })(Orders);
