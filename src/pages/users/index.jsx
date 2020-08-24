import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';



const Users = () => {
  const url = "https://ka-users-api.herokuapp.com/users";
  const [data, setData] = useState("");
  
  useEffect (() => {
    axios
      .get(url, 
        { headers: {Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzYsImV4cCI6MTYyOTU1ODkwNH0.g85VIjVCsBZ2DmtQY6JC4Difliypm7fi9R5Obe7FZbg"} })
        .then(resp => { //request bem sucedido
          // console.log("GET")
          console.log(resp.data)
          setData(resp.data)
        })
          .catch((error) => { // erro no request
              console.log(error)
          })
  },[])


//===========================================================================
  const columns = [
    {
      title: "id",
      dataIndex: "id", 
      key: 'id',
      render: text => <a>{text}</a>,
    },

    {
      title: "Nome",
      dataIndex: "name", 
      key: 'name',
      render: text => <a>{text}</a>,
    },

    {
      title: "Usuário",
      dataIndex: "user", 
      key: 'user',
      render: text => <a>{text}</a>,
    },

    {
      title: "E-mail",
      dataIndex: "email", 
      key: 'email',
      render: text => <a>{text}</a>,
    },
       
  ];

  return  (
    <Table dataSource={data} columns={columns} />
  )
}

export default Users;