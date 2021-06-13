import { 
CREATE_ORDER,
LIST_ORDERS,
REFRESH_ORDERS
} 
from '../actions/actionTypes'

const defaultStore = {
    orders : [],
    ordersCreated : [],
    ordersFetching : true
}

export default function userReducer (store = defaultStore, action) {

    switch (action.type) {

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