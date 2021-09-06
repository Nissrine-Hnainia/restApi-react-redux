import React from 'react'
import { Card, Button } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem', marginBottom:"40px" }}>
            <Card.Img variant="top" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                {user.username}
                <br/>
                {user.email}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard
