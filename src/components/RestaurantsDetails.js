import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import Rating from './Rating'

function RestaurantsDetails() {
   const [data, setData] = useState([])
    const params = useParams()
  

   const fetchData = async () => {
       await fetch('/restaurants.json')
           .then((res) => res.json())
          .then((data) => setData(data.restaurants))
  }

  useEffect(() => {
      fetchData()
   }, [])

    const details =data.find((i) => i.id == params.id)

  console.log("data is ", details);

    return (
        <div>
            {
                details ? (
                    <Row className='my-3'>
                        <Col md={3}>
                            <Image className='img' src={details.photograph} fluid />
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h2>{details.name}</h2>
                                    <p>{details.neighborhood}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p> Cuisine : {details.cuisine_type}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p> Address : {details.address}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h4>Operation Hours</h4>
                                    <p>Monday : {details.operating_hours.Monday}</p>
                                    <p>Tuesday : {details.operating_hours.Tuesday}</p>
                                    <p>Wednesday : {details.operating_hours.Wednesday}</p>
                                    <p>Thursday : {details.operating_hours.Thursday}</p>
                                    <p>Friday : {details.operating_hours.Friday}</p>
                                    <p>Saturday : {details.operating_hours.Saturday}</p>
                                    <p>Sunday: {details.operating_hours.Sunday}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Row>
                            <Card className='my-3 mx-3 p-3 rounded card'>
                                <Rating data={details.reviews} />
                            </Card>

                        </Row>
                    </Row>
                ) : 'null'
            }
        </div>
    )
}

export default RestaurantsDetails