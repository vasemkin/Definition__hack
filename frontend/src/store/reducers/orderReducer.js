import { 
CREATE_ORDER,
LIST_ORDERS,
TOGGLE_FETCHING
} 
from '../actions/actionTypes'

const defaultStore = {
    orders : [],
    ordersCreated : [],
    ordersFetching : true
}

export default function userReducer (store = defaultStore, action) {

    switch (action.type) {

        case TOGGLE_FETCHING:
            return {
                ...store,
                ordersFetching : !store.ordersFetching
            }

        case CREATE_ORDER:
            //payload - orderId
            return {
                ...store,
                ordersCreated : [...store.ordersCreated, action.payload]
            }

        case LIST_ORDERS:
            //payload - orders
            return {
                ...store, 
                orders : action.payload
            }

        default:
            return store
    }

}