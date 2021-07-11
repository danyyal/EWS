
import cartReducer from '../Cart/cart.reducer';
import wishlistTypes from './wishlist.types';
import {handleAddWishlist,handleRemoveWishItem} from './wishlist.utilis';
const INITIAL_STATE={
    wishItems:[]
};

const  wishlistReducer =(state=INITIAL_STATE,action)=>{
switch(action.type){
case wishlistTypes.ADD_TO_WISHLIST:
    return {
        ...state,
        wishItems:handleAddWishlist({
            prevWishItem:state.wishItems,
            nextWishItem:action.payload,
        })
    };
case wishlistTypes.REMOVE_WISH_ITEM:
    return{
        ...state,
        wishItems:handleRemoveWishItem({
            prevWishItem:state.wishItems,
            removeWishItem:action.payload
        })
    }
    default:
        return state;
}
}

export default wishlistReducer;