import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, BrowserRouter, Route, Switch} from "react-router-dom";

import Login from './pages/login'
import UserForm from './pages/userForm'
import Users from './pages/users'
import Feedback from './pages/feedbacks'
import NewFeedback from './pages/newFeedback'

 
const { Header, Content, Footer } = Layout;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));  // Token gerado no login
  const [authenticated,SetAuthenticated] = useState(false); // faz a validação se autenticado, no login 


  return (
    
    <BrowserRouter>
    
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/userForm">Cadastre-se</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/">Login</Link></Menu.Item>
              
              <Menu.Item key="3"><Link to="/newFeedbacks">Feedback</Link></Menu.Item>
             {authenticated && <Menu.Item key="3"><Link to="/users">Usuários</Link></Menu.Item>}  
            </Menu>
          </Header>

          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">Formulario {console.log(authenticated)} 

          <Switch>
            <Route path="/userForm" component={UserForm} />
            <Route path="/newFeedbacks" component={NewFeedback} />
            <Route path="/users/:id/feedbacks/" component={Feedback} />
            <Route path="/users" component={Users} />
            <Route exact path="/" render={() => (
              <Login  token={token} setToken={setToken} authenticated={authenticated} SetAuthenticated={SetAuthenticated} /> //props
            )} /> {/* substitui o component={Login} pelo render pra poder passar as props */}
          </Switch>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Kenzie</Footer>

        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
