import React, { Fragment, Component } from 'react';
import Product from '../product/product';

class Shop extends Component {
    state = {
        description: [
            {
                id: 1,
                name: '可乐1',
                price: 15,
                unit: "瓶",
                url: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 0
            },
            {
                id: 2,
                name: '可乐2',
                price: 13,
                unit: "罐",
                url: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 0
            },
            {
                id: 3,
                name: '可乐3',
                price: 1,
                unit: "瓶",
                url: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 0
            },
            {
                id: 4,
                name: '可乐4',
                price: 10,
                unit: "桶",
                url: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 0
            },
        ],
    };

    handleAddProductAmount = (id) => {
        const description = this.state.description.map((des) => {
            if (des.id === id) {
                return {
                    ...des,
                    amount: Number(des.amount) + 1
                }
            } else {
                return { ...des };
            }
        });

        this.setState({
            description,
        })
    };

    render() {
        return (
            <Fragment>
                <div>
                    {this.state.description.map((description) => (
                        <Product
                            name={description.name}
                            price={description.price}
                            unit={description.unit}
                            url={description.url}
                            amount={description.amount}
                            handleAddProductAmount={() => this.handleAddProductAmount(description.id)}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default Shop;