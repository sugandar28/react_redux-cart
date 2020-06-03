import React, { Component } from "react";
import formateCurrency from "../util";
import Fade from "react-reveal/Fade";

import ModalComponent from "./ModalComponent";

import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading</div>
          ) : (
            <ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a href={"#" + product._id}>
                      <img
                        src={product.image}
                        alt={product.title}
                        onClick={() => this.openModal(product)}
                      />
                      <p>{product.title}</p>
                      <div className="product_price">
                        <div>{formateCurrency(product.price)}</div>
                        <button
                          onClick={() => this.props.addToCart(product)}
                          className="button primary"
                        >
                          {" "}
                          Add To cart
                        </button>
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {this.state.product && (
          <div>
            <ModalComponent
              closeModal={this.closeModal}
              product={this.state.product}
              addToCart={this.props.addToCart}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products.filteredItems };
};
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
