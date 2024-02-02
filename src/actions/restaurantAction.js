import {RESTAURANT_LIST_SUCCESS ,RESTAURANT_LIST_FAIL} from '../constants/restaurantConstants'
import axios from 'axios'

export const ListRestaurant = () => async  (dispatch) => {
    try{
        const {data} = await axios.get('/restaurants.json')
        dispatch({
            type : RESTAURANT_LIST_SUCCESS ,payload : data.restaurants
        })
        
    }catch (error) {

        dispatch({
            type : RESTAURANT_LIST_FAIL,error : error
        })
    }
}