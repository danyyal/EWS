import cartTypes from './cart.types';
import {handleAddCart,handleRemoveCartItem,handleReduceCartItem } from './cart.utilis';


const INITIAL_STATE={
    cartItems:[]
};

const  cartReducer =(state=INITIAL_STATE,action)=>{
switch(action.type){
case cartTypes.ADD_TO_CART:
    return {
        ...state,
      cartItems:handleAddCart({
          prevCartItem:state.cartItems,
          nextCartItem:action.payload,
      })
    }
case cartTypes.REMOVE_CART_ITEM:
    return{
        ...state,
     cartItems:handleRemoveCartItem ({
       prevCartItem:state.cartItems,
       removeCartItem:action.payload  
     })
    }
case cartTypes.REDUCE_CART_ITEM:
    return{
        ...state,
        cartItems:handleReduceCartItem({
            prevCartItem:state.cartItems,
            reduceItem:action.payload
        })
    }
case cartTypes.CLEAR_CART:
    return{
        ...state,
       ...INITIAL_STATE
    }
    default:
        return state;
}
}

export default cartReducer;