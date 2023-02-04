import {
USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,
USER_LOGIN_FAIL,
USER_LOGOUT
} from '../constants/userConstants'

export const userLoginReducer = (state = { }, action) => { 
    switch (action.type) {
        case USER_LOGIN_REQUEST:  //mentre i prodotti stanno caricando/aggiornando
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload} //dall'action vengono presi i product
            
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        
        case USER_LOGOUT:
            return {}//state vuoto
        
        default:
            return state
    }

}