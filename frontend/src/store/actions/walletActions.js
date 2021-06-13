import { 
GET_TOKENS,
TOGGLE_TOKENFETCH } 
from './actionTypes'

import axios from 'axios'

const { REACT_APP_API_URL } = process.env


export const refreshTokens = () => {
    return {
        type: TOGGLE_TOKENFETCH
    }
}

export const getTokensCreator = (token) => {
    return {
        type: GET_TOKENS,
        payload: token
    }
}

export const getTokens = () => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/get_tokens`
        try {
            const res = await axios.get(baseQuery)
            dispatch(getTokensCreator(res.data))
        } catch (error) {
            // fail
        }
    }   
}