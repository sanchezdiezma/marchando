import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './RestaurantsPage.css'

const RestaurantCard = ({ name, direction, description, priceRange, capacity, imageURL, typeOfKitchen, specialInfo,}) => {
  return (
    <Card className="coaster-card" style={{ width: '16rem' }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {direction}.
          {description}.
          {priceRange}.
          {capacity}.
          {typeOfKitchen}.
          {specialInfo}.
        </Card.Text>

        <Link to={"/"}>
          <Button variant="primary">Reserva</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default RestaurantCard