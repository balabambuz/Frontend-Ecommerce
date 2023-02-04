import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'


export const productListReducers = (state = {products: [] }, action) => { //Nello state su brave vedi ProductList => Products
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:  //mentre i prodotti stanno caricando/aggiornando
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload} //dall'action vengono presi i product
            
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }

}


export const productDetailsReducers = (state = {product: {reviews:[]} }, action) => { 
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:  
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload} 
            
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
         
        default:
            return state
    }

}