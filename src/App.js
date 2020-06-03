// feature 1
import React from "react";
import AdminScreen from "./screens/AdminScreens";
import HomeScreen from "./screens/HomeScreens";

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/"> React Shopping Cart</Link>
              <Link to="/admin"> Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All Rights are reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
