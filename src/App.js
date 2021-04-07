import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
import {DISHES} from './shared/dishes';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
