import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import { Table, Button } from 'antd';
import axios from 'axios';
import NewFeedback from '../newFeedback'

const Feedback = () => {
    const params = useParams();
    const [data, setData] = useState("");
    console.log(params)
    const url = `https://ka-users-api.herokuapp.com/users/${params.id}/feedbacks`;

    useEffect (() => {
        axios
            .get(url, { 
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzYsImV4cCI6MTYyOTU1ODkwNH0.g85VIjVCsBZ2DmtQY6JC4Difliypm7fi9R5Obe7FZbg"
                }
            })
            .then(resp => { 
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
        <>
            <Switch>
                {/* <Route path="/newFeedbacks" component={NewFeedback} /> */}
            </Switch>
            <Table dataSource={data} columns={columns}>nome</Table>
            <Link to="/newFeedbacks">
                <Button type="primary">Adicionar um comentário</Button>
            </Link>
        </>
    )
}

export default Feedback;