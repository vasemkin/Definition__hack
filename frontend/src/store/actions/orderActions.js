import { 
CREATE_ORDER, 
LIST_ORDERS,
TOGGLE_FETCHING } 
from './actionTypes'

import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const refreshOrders = () => {
    return {
        type: TOGGLE_FETCHING
    }
}

export const postOrderCreator = (orderId) => {
    return {
        type: CREATE_ORDER,
        payload: orderId
    }
}

export const postOrder = (order) => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/create_new_order`
        try {
            const res = await axios({
                method: 'post',
                url: baseQuery,
                data: order
            })
            dispatch(postOrderCreator(res.data.orderId))
            dispatch(refreshOrders())
        } catch (error) {
            // fail
        }
    }
}

export const listOrdersCreator = (orders) => {
    return {
        type: LIST_ORDERS,
        payload: orders
    }
}

export const listOrders = () => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/list_orders`
        try {
            const res = await axios.get(baseQuery)
            dispatch(listOrdersCreator(res.data))
        } catch (error) {
            // fail
        }
    }   
}