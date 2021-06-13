import { 
CREATE_ORDER
} 
from '../actions/actionTypes'

const defaultStore = {
    orders : [],
    ordersCreated : []
}

export default function userReducer (store = defaultStore, action) {

    switch (action.type) {

        case CREATE_ORDER:
            //payload - orderId
            return {
                ...store,
                ordersCreated : [...store.ordersCreated, action.payload]
            }

        default:
            return store
    }

}