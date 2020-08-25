import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const NewFeedback = () => {
    const formRef = React.createRef();

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        formRef.current.resetFields();
    };

    const onFill = () => {
        formRef.current.setFieldsValue({
            name: 'João',
            coment: 'Que legal! Parabéns!!!',
            grade: '10',
        });
    };

    return (
        <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
            <Form.Item
                name="name"
                label="Nome"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="coment"
                label="Comentário"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="grade"
                label="Avaliação"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Sua avaliação"
                    allowClear
                >
                    <Option value="zero">0</Option>
                    <Option value="one">1</Option>
                    <Option value="two">2</Option>
                    <Option value="tree">3</Option>
                    <Option value="four">4</Option>
                    <Option value="five">5</Option>
                    <Option value="six">6</Option>
                    <Option value="seven">7</Option>
                    <Option value="eight">8</Option>
                    <Option value="nine">9</Option>
                    <Option value="ten">10</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
    );
}

export default NewFeedback;