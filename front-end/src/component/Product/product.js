import React, { Component, Fragment } from 'react';

class Product extends Component {
    render() {
        return (
            <Fragment>

                <div>
                    <img src={this.props.url} alt="product_image" />
                    <p>{this.props.name}</p>
                    <p>单价：{this.props.price}元/{this.props.unit}</p>
                    <button className="add_button"></button>
                </div>
            </Fragment>
        )
    }
}

export default Product;