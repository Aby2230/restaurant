import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestaurantsCard from './RestaurantsCard'
import { ListRestaurant} from '../actions/restaurantAction'
import { useDispatch,useSelector } from 'react-redux'

function Home() {

  //const [items, setItems] = useState([])

  //const fetchData = async () => {
  //  await fetch('/restaurants.json')
   //   .then((res) => res.json())
   //   .then((data) => setItems(data.restaurants))
  //}

  const dispatch = useDispatch()

  const result = useSelector(state => state.restaurantReducer)

  const {restaurant} = result

  useEffect(() => {
    dispatch(ListRestaurant())
  }, [])

  return (

    <Row>
      {restaurant.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3} >
          <RestaurantsCard data={item} />
        </Col>
      ))}
    </Row>


  )
}

export default Home
