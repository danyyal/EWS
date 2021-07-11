import wishlistTypes from './wishlist.types';

export const addWishProduct =(nextWishItem)=>({
    type:wishlistTypes.ADD_TO_WISHLIST,
    payload:nextWishItem
})

export const removeWishItem= (wishItem)=>({
    type:wishlistTypes.REMOVE_WISH_ITEM,
    payload:wishItem
})