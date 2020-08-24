import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import axios from 'axios';

const Feedback = () => {
    const [data, setData] = useState("");
    const url = "https://ka-users-api.herokuapp.com/users/735/feedbacks";

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
  
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'nome',
        },
        {
            title: 'Comentário',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title: 'Avaliação',
            dataIndex: 'grade',
            key: 'grade',
        },
    ];

    return (
        <Table dataSource={data} columns={columns}>nome</Table>
    )
}

export default Feedback;