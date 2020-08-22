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
              console.log("GET")
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
            dataIndex: "name", //id, nome
            key: 'name',
            render: text => <a>{text}</a>,
        },

        // {
        //     title: 'Age',
        //     dataIndex: 'age',
        //     key: 'age',
        // },

        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        // },

        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
            <>
            {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                      color = 'volcano';
                  }
                  return (
                      <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                      </Tag>
                  );
            })}
              </>
              ),
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
            </Space>
            ),
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

        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },

        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
  ];

  return <Table dataSource={data} columns={columns} />;
     
}

export default Users;