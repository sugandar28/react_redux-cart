import React, { Component } from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formateCurrency from "../util";

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal isOpen={true} onRequestClose={this.props.closeModal}>
          <Zoom>
            <button className="close-modal" onClick={this.props.closeModal}>
              X
            </button>
            <div className="product-details">
              <img
                src={this.props.product.image}
                alt={this.props.product.title}
              />
              <div className="product-details-description">
                <p>
                  <strong>{this.props.product.title}</strong>
                </p>
                <p>{this.props.product.description}</p>
                <p>
                  Avaliable Size:{"  "}
                  {this.props.product.availableSizes.map((x) => (
                    <span>
                      {" "}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <p className="product-price">
                  <div>{formateCurrency(this.props.product.price)}</div>
                  <button
                    className="primary button"
                    onClick={() => {
                      this.props.addToCart(this.props.product);
                      this.props.closeModal();
                    }}
                  >
                    AddToCart
                  </button>
                </p>
              </div>
            </div>
          </Zoom>
        </Modal>
      </div>
    );
  }
}
