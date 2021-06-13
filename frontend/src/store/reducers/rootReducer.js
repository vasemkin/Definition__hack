import { combineReducers } from 'redux'
import userReducer from './userReducer'
import orderReducer from './orderReducer'
import walletReducer from './walletReducer'

export default combineReducers({
    user : userReducer,
    order : orderReducer,
    wallet : walletReducer
})