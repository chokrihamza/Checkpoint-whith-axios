import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Alert, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userList.css'
function UserList() {

    const [userList, setList] = useState('');
    const [error, setError] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(res => setList(res))
            .catch(error => setError(error.message))

    }, [])

    if (userList == '') {
        return <><CircularProgress color="secondary" /><h1>{error}</h1></>;
    } else {
        return (
            <>
                <Alert variant="warning" style={{ textAlign: 'center' }}>
                    List Of Data
                </Alert>
                <Container >
                    <Row className="justify-content-md-center">

                        {
                            userList.map((el, i) =>

                                <Card key={i} style={{ width: '60%', margin: '20px', borderRadius: "30px" }} className="card">

                                    <Card.Body >
                                        <Card.Title style={{ color: "crimson" }} >Mr/Miss:{el.name}</Card.Title>
                                        <ol>
                                            <li>Username:{el.username}</li>
                                            <li>email:{el.email}</li>
                                            <li>phone:{el.phone}</li>
                                            <li>email:{el.email}</li>
                                            <li>website:{el.website}</li>

                                        </ol>




                                    </Card.Body>
                                </Card>
                            )
                        }





                    </Row>

                </Container>
            </>

        )
    }

}
export default UserList
