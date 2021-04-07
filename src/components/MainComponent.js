import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;