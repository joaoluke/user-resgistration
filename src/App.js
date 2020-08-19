
import React from 'react';
import logo from './logo.svg';
import './App.css';




import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {

  return (
    <div className="App">
      
       
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Nome Usuário</Menu.Item>
              <Menu.Item key="2">Login</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
           
            <div className="site-layout-content">Formulario</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Kenzie</Footer>
          
        </Layout>
    
    </div>
  );
}

export default App;
