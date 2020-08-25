import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
    const [ name, setName ] = useState("");
    const [ comment, setComment ] = useState("");
    const history = useHistory();
    const params = useParams();

    const setField = (e, field) => {
        field(e.target.value)
    }

    const onFinish = values => {
        axios.post(`https://ka-users-api.herokuapp.com/users/735/feedbacks`, 
            {
                
                name,
                comment, 
                "grade": values.grade
                
            },
            {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3MzUsImV4cCI6MTYyOTgyOTMwMH0.jwkEiunjzTHbVptDwqiCVMnOgcwr3ij-NQpe_WE9usw"
                }
            }

                
            )
            .then(res => console.log(res))
            .catch(error => console.log(error))
            history.push("/users/735/feedbacks")
            
    };

    const onReset = () => {
        formRef.current.resetFields();
    };

    const onFill = () => {
        formRef.current.setFieldsValue({
            name: '',
            comment: '',
            grade: '',
        });
    };

    return (
        <>
            <Form {...layout} 
                ref={formRef} 
                name="control-ref" 
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    label="Nome"
                    onChange={(e) => {
                        setField(e, setName)
                    }}
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="comment"
                    label="Comentário"
                    onChange={(e) => {
                        setField(e, setComment)
                    }}
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
                        <Option value="0">0</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
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
        </>
    );
}

export default NewFeedback;