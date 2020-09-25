import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './main.css';
import Shop from "../Shop/shop";
import List from "../List/list";
import Add_product from "../Add_Product/add_product";

class Main extends Component {
    render() {
      return (
        <div className="app">
          <Router>
            <NavLink to="/" className="nav_link">
              商城
            </NavLink>
            <NavLink to="/list" className="nav_link">
              订单
            </NavLink>
            <NavLink to="/add_product" className="nav_link">
              添加商品
            </NavLink>
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/list" component={List} />
              <Route exact path="/add_product" component={Add_product} />
            </Switch>
          </Router>
        </div>
      );
    }
  }

export default Main;