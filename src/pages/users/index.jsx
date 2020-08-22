import React, { useState } from 'react';
import ReactDOM from 'react-dom';

 import './index.css';
import { Table, Tag, Space } from 'antd';

import axios from 'axios';

const Users = () => {
  const [teste, setTeste] = useState("");



  axios
    .get("https://ka-users-api.herokuapp.com/users", 
      { headers: {Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzYsImV4cCI6MTYyOTU1ODkwNH0.g85VIjVCsBZ2DmtQY6JC4Difliypm7fi9R5Obe7FZbg"} })

    .then(response => { //request bem sucedido
              // console.log("GET")
               console.log(response.data)
              setTeste(response.data)
            
            })
          .catch((error) => { // erro no request
              console.log(error)
            })

//===========================================================================
  const columns = [
        {
            title: "nome",
            dataIndex: "id", //id, nome
            key: 'id',
            render: text => <a>{text}</a>,
        },
       
  ];

  const data = [
        
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
  ];

  return  (
    
    <Table dataSource={teste} columns={columns} />
  )
}

export default Users;