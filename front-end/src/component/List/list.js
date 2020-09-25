import React, { Fragment,Component } from 'react';
import ListRow from '../ListRow/listRow';

class List extends Component{
    state = {
        description: [
            {
                id: 1,
                name: '可乐1',
                price: 15,
                unit:"瓶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 3
            },
            {
                id: 2,
                name: '可乐2',
                price: 13,
                unit:"罐",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 2
            },
            {
                id: 3,
                name: '可乐3',
                price: 1,
                unit:"瓶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 1
            },
            {
                id: 4,
                name: '可乐4',
                price: 10,
                unit:"桶",
                url:   `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370172978,1480734805&fm=26&gp=0.jpg`,
                amount: 4
            },
        ],
    };
    render(){
        return (
        
            <Fragment>
                <table>
                    <tr>
                        <td>名字</td>
                        <td>单价</td>
                        <td>数量</td>
                        <td>操作</td>
                    </tr>
                    {this.state.description.map((description) => (
                            <ListRow
                                name={description.name}
                                unit={description.unit}
                                price = {description.price}
                                amount = {description.amount}
                            />
                        ))}
                </table>
            </Fragment>
        )
    }
}

export default List;