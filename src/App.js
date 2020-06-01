// feature 1
import React from "react";
import data from "./data/data.json";
import Products from "./component/Products";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
      sort: "",
      size: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/"> React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"> Cart</div>
          </div>
        </main>
        <footer>All Rights are reserved</footer>
      </div>
    );
  }
}

export default App;
