import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Button,
} from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// const [ name, setName ] = useState("");

const UserForm = () => {

  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const history = useHistory();
  const onFinish = values => {
    axios.post("https://ka-users-api.herokuapp.com/users", {
      "user": {
        "name": values.user.name,
        "user": values.nickname,
        "email": values.email,
        "password": values.password,
        "password_confirmation": values.confirm,
      }
    })
    .then(console.log("sucess"))
    .catch(error => console.log(error))
    history.push("/")
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
    <Form.Item
      name={['user', 'name']}
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
          name="nickname"
          label={
            <span>
              Usuário&nbsp;
              <Tooltip title="Do que você quer que os outros chamem você?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Senha"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
      <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirme a senha"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
      <Input.Password />
      </Form.Item>



   
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Cadastro
        </Button>
      </Form.Item>
    </Form>
  );
};


export default UserForm;