import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, BrowserRouter, Route } from "react-router-dom";

import Login from './pages/login'
import UserForm from './pages/userForm'



const { Header, Content, Footer } = Layout;

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/userForm">Cadastre-se</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/">Login</Link></Menu.Item>
            </Menu>
          </Header>

          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">Formulário
            <Route path="/" exact component={Login} />
            <Route path="/userForm" exact component={UserForm} />
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Kenzie</Footer>

        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
