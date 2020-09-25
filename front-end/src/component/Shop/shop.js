import React, { Fragment } from 'react';
import Product from '../Product/product';

const Shop = (props) => {
    const state = {
        description: [
            {
                id: 1,
                name: '可乐1',
                price: 15,
                unit:"瓶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`
            },
            {
                id: 2,
                name: '可乐2',
                price: 13,
                unit:"罐",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`
            },
            {
                id: 3,
                name: '可乐3',
                price: 1,
                unit:"瓶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`
            },
            {
                id: 4,
                name: '可乐4',
                price: 10,
                unit:"桶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`
            },
        ],
    };
    return (
        <Fragment>
            <div>
                {state.description.map((description) => (
                    <Product
                        name={description.name}
                        price={description.price}
                        unit={description.unit}
                        url = {description.url}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default Shop;