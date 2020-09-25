import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './main.css';
import Shop from "../Shop/shop";
import List from "../List/list";
import Add_product from "../Add_Product/add_product";
import home_icon from "../../static/home.png"
import list_icon from "../../static/list.png"
import add_icon from "../../static/add.png"
class Main extends Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <header>
                        <img src={home_icon} className="header_icon" alt="home_icon" />
                        <NavLink to="/" className="nav_link">
                            商城
            </NavLink>
                        <img src={list_icon} className="header_icon" alt="list_icon" />
                        <NavLink to="/list" className="nav_link">
                            订单
            </NavLink>
                        <img src={add_icon} className="header_icon" alt="add_icon" />
                        <NavLink to="/add_product" className="nav_link">
                            添加商品
            </NavLink>
                    </header>
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