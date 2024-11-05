import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Component.css'

function Component({name,img,data}) {
  return (
    <>
        <Card className='card' style={{ width: '18rem' }}>
        <img className='head-logo' alt ={name} src={img}/>
        <Card.Body>
        
        <Card.Text className='card-text'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{data}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Component