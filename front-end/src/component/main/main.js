import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Layout, Menu, } from 'antd';
import './main.css';
import Add_product from "../Add_Product/add_product";


class Main extends Component {
    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout>
                <Router>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <NavLink to="/" className="nav_link">
                                    商城
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/list" className="nav_link">
                                    订单
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/add_product" className="nav_link">
                                    添加商品
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <Switch>
                                <Route exact path="/add_product" component={Add_product} />
                            </Switch>
                        </div>
                    </Content>
                </Router>
                <Footer style={{ textAlign: 'center' }}>Tw Mall ©2020 Created by Mc</Footer>
            </Layout>
        )
    }
}
export default Main;

