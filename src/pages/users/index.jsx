import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';



const Users = () => {
  const url = "https://ka-users-api.herokuapp.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = data.id
    console.log(data)
  }, [data])
  
  useEffect (() => {
    axios
      .get(url, 
        { headers: {Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzYsImV4cCI6MTYyOTU1ODkwNH0.g85VIjVCsBZ2DmtQY6JC4Difliypm7fi9R5Obe7FZbg"} })
        .then(resp => {
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
    },

    {
      title: "Nome",
      dataIndex: "name", 
      key: 'name',
    },

    {
      title: "Usuário",
      dataIndex: "user", 
      key: 'user',
    },

    {
      title: "E-mail",
      dataIndex: "email", 
      key: 'email',
    },
       
    {
      render: id => <Link to={`/users/${id}/feedbacks/`}>Feedbacks</Link>,
      dataIndex: 'id'
    }
  ];

  return  (
    <Table dataSource={data} columns={columns} />
  )
}

export default Users;