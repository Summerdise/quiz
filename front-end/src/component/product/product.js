
import React, { Component, Fragment } from 'react';
import './product.css';

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="item">
                    <img src={this.props.url} alt="product_image" />
                    <p className="product_name">{this.props.name}</p>
                    <p className="product_price">单价：{this.props.price}元/{this.props.unit}</p>
                    <button className="add_button" onClick={this.props.handleAddProductAmount}></button>
                </div>
            </Fragment>
        )
    }
}

export default Product;