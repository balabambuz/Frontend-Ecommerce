import {CARD_REMOVE_ITEM, CART_ADD_ITEM} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [] }, action) => {
   switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)//oggetto uguale a oggetto payload
            if(existItem){ //se l'oggetto esiste gia
                return{
                    ...state, 
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)//ritorna il prodotto aggiornato del payload altrimenti ritorna l'oggetto 
                }                                                   //originale invariato
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item] //ritorna l'elenco originale di  prodotti piu il nuovo prodotto aggiunto
                }      
            }

        case CARD_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(x => x.product !== action.payload)
            }

        default:
            return state
   } 
}