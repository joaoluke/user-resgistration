import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

 import './index.css';
import { Table, Tag, Space } from 'antd';

import axios from 'axios';

const Users = () => {
  const [teste, setTeste] = useState("");
  
  useEffect (() => {
        axios
          .get("https://ka-users-api.herokuapp.com/users", 
            { headers: {Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzYsImV4cCI6MTYyOTU1ODkwNH0.g85VIjVCsBZ2DmtQY6JC4Difliypm7fi9R5Obe7FZbg"} })
            .then(resp => { //request bem sucedido
              // console.log("GET")
              console.log(resp.data)
              setTeste(resp.data)
            
            })
              .catch((error) => { // erro no request
                  console.log(error)
                })
      },[])


//===========================================================================
  const columns = [
    {
      title: "id",
      dataIndex: "id", //id, nome
      key: 'id',
      render: text => <a>{text}</a>,
    },

    {
      title: "Nome",
      dataIndex: "name", //id, nome
      key: 'name',
      render: text => <a>{text}</a>,
    },

    {
      title: "Usuário",
      dataIndex: "user", //id, nome
      key: 'user',
      render: text => <a>{text}</a>,
    },

    {
      title: "E-mail",
      dataIndex: "email", //id, nome
      key: 'email',
      render: text => <a>{text}</a>,
    },
       
  ];

  return  (
    <Table dataSource={teste} columns={columns} />
  )
}

export default Users;