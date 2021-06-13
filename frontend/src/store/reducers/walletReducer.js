import { 
GET_TOKENS, 
TOGGLE_TOKENFETCH
} 
from '../actions/actionTypes'

const defaultStore = {
    tokens : {},
    tokensFetching : true
}

export default function walletReducer (store = defaultStore, action) {
    switch (action) {
        case TOGGLE_TOKENFETCH:{
            return {
                ...store,
                tokensFetching : !store.tokensFetching
            }
        }

        case GET_TOKENS:
            console.log('s')
            return {
                ...store,
                tokens : action.payload
            }
    
        default:
            return store
    }
}