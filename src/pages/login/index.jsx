// https://ant.design/components/form/  formulario Log in
import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'

import axios from 'axios';

const Login = ({token, setToken, SetAuthenticated, authenticated}) => {

  const [requestError, setRequestError] = useState("") //  Erro na requisição 
  

  const onFinish = (values) => {
    console.log(token)
    console.log('Received values of form: ', values);
    axios     // se login for sucesso executa o then, se possui erro executa o catch
      .post("https://ka-users-api.herokuapp.com/authenticate",values) 
      .then((res) => {  
        console.log(res);
        // setToken(res.data.auth_token);
        //?? este setItem como de fosse o setToken ??
        localStorage.setItem("token", res.data.auth_token); //Grava o token(q é um objeto) no local "HD da maquina"
        setRequestError("");
        SetAuthenticated(true);
      })
      
      .catch((error) => { // catch - Trata os erros
        //debugger;
        console.log(error.response.data); //retorna o erro especifico, error é um objeto
        console.log(error.message) // mensagem generica erro 
        console.log(error.response.status)  // ex. erro 401
        if (error.response.status === 401){
          setRequestError("Credenciais Inválidas");
          SetAuthenticated(false);
        } else {
            setRequestError ("Erro requisição");
            SetAuthenticated(false);
          }
      })
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>

      <Form.Item>
        <div> {requestError} </div>
      </Form.Item>
      
    </Form>
  );
};

export default Login