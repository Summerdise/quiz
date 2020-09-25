import React, { Component, Fragment } from 'react';

class ListRow extends Component {
    render() {
        return (
            <Fragment>
                <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.amount}</td>
                <td>{this.props.unit}</td>
                <td><button>删除</button></td>
                </tr>
            </Fragment>
        )
    }
}

export default ListRow;