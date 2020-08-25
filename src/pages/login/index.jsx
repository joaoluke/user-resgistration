// https://ant.design/components/form/  formulario Log in
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'

import axios from 'axios';

const Login = ({token, setToken, SetAuthenticated, authenticated}) => {
  const history = useHistory();
  const [requestError, setRequestError] = useState("") //  Erro na requisição 
  

  const onFinish = (values) => {
    axios 
      .post("https://ka-users-api.herokuapp.com/authenticate",values) 
      .then((res) => { 
        localStorage.setItem("token", res.data.auth_token); //Grava o token(q é um objeto) no local "HD da maquina"
        setRequestError("");
        SetAuthenticated(true);
      })
      
      .catch((error) => {
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
      history.push("/users/")
  };

  return (
    <>
      <h1>Login</h1>
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
              message: 'Por favor, insira seu nome de usuário!',
            },
          ]}
        >
          <Input prefix={<UserOutlined 
          className="site-form-item-icon" />} 
          placeholder="Usuário" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha!',
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
    </>
  );
};

export default Login