import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class Add_product extends Component {

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (  
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <p>
                    添加货品
                </p>
                <Form.Item
                    label="名称"
                    name="name"
                    rules={[{ required: true, message: 'Please input product name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="价格"
                    name="price"
                    rules={[{ required: true, type: Number, message: 'Please input product price!' }]}
                >
                    <Input type="number"/>
                </Form.Item>

                <Form.Item
                    label="单位"
                    name="unit"
                    rules={[{ required: true, message: 'Please input product unit!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="图片"
                    name="url"
                    rules={[{ required: true, message: 'Please input product pic url!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}

export default Add_product;
