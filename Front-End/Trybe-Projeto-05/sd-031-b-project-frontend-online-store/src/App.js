import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path="/" render={ (props) => <Home { ...props } /> } />
          <Route exact path="/cart/" render={ (props) => <Cart { ...props } /> } />
          <Route
            exact
            path="/productdetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </BrowserRouter>
      </main>
    );
  }
}
