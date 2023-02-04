   import axios from 'axios'
import { CART_ADD_ITEM, CARD_REMOVE_ITEM } from '../constants/cartConstants'
//prende il prodotto e lo aggiunge al carrello in base all'id che riceve



export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id, //quando chiamo x.product mi rivolgo all'id
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty 
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}

export const removeFromCart = (id) => (dispatch, getState) => { //manda payload con id per capire cosa cancellare
    dispatch({
        type:CARD_REMOVE_ITEM,
        payload:id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}