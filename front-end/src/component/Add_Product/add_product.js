import React, { Fragment, Component } from 'react';

class Add_product extends Component {

    state = {
        name: "",
        price: "",
        unit: "",
        url: "",
    }

    handleFiledChange = (position, event) => {
        this.setState({
            [position]: event.target.value,
        });
    }

    render() {
        return (
            <Fragment>
                <main className="form">
                    <h3>添加商品</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="title">*名称：</label>
                            <input type="text"
                                className="must_info"
                                placeholder="名称"
                                onChange={e => this.handleFiledChange("name", e)}
                            />
                        </div>
                        <div>
                            <label className="title">*价格：</label>
                            <input type="text"
                                className="must_info"
                                placeholder="价格"
                                onChange={e => this.handleFiledChange("prive", e)} />
                        </div>
                        <div>
                            <label className="title">*单位：</label>
                            <input type="text"
                                className="must_info"
                                placeholder="单位"
                                onChange={e => this.handleFiledChange("unit", e)} />
                        </div>

                        <div className="checked">
                            <label className="title">*图片：</label>
                            <input className="must_info" type="text"
                                placeholder="URL"
                                onChange={e => this.handleFiledChange("url", e)} />
                        </div>
                        <div className="submit_div">
                            <input type="submit" value="Submit"
                                disabled={!this.state.name || !this.state.des}
                                className="submit_button"
                            />
                        </div>
                    </form>
                </main>

            </Fragment>
        )
    }

}

export default Add_product;