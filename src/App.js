import React, { Component } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from './shared/dishes';
import './App.css';
import Main from './components/MainComponent';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
