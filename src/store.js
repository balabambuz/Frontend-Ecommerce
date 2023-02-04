import {createStore, combineReducers, applyMiddleware } from 'redux' //prende tutti i reducers e li combina in un unico reducer
import thunk from 'redux-thunk'                                      // thunk chiama action creators che ritornano una funzione invece di un action object  
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
     productList: productListReducers,
     productDetails: productDetailsReducers,
     cart: cartReducer,
     userLogin: userLoginReducer, 
}) //reducer uguale alla combinazione di reducers

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [] //se esiste lo prendiamo e lo trasformiamo in JSON altrimenti passiamo un array vuoto

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null 

const initialState = {
    cart: { cartItems: cartItemsFromStorage}, //se era stata già aperta una sessione allora lo state verrà caricato con gli oggetti salvati nel carrello 
    userLogin: { userInfo: userInfoFromStorage} // della sessione precedente
}

const middleware = [thunk] //passo come array di middleware per aggiungerne di più in una volta

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))) // ... spread operator



export default store